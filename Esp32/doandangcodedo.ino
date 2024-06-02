#include "Nextion.h"
#include <SoftwareSerial.h>
#include <DHT.h>
#include <Wire.h>
#include <Adafruit_Sensor.h>
#include <Adafruit_TSL2561_U.h>
#include <WiFi.h>
#include <HTTPClient.h>
#include <ArduinoJson.h>
#include <WebServer.h>

#define DHTPIN 12
#define DHTTYPE DHT21
// Master RX, TX, connect to Nextion TX, RX

const char *ssid = "your_SSID";
const char *password = "your_PASSWORD";

WebServer server(80);

SoftwareSerial HMISerial(10, 11);
DHT dht(DHTPIN, DHTTYPE);
Adafruit_TSL2561_Unified tsl = Adafruit_TSL2561_Unified(TSL2561_ADDR_FLOAT, 12345);
NexNumber x0 = NexNumber(1, 7, "x0");
NexNumber x1 = NexNumber(1, 8, "x1");
NexNumber x2 = NexNumber(1, 9, "x2");
NexNumber x3 = NexNumber(1, 10, "x3");
NexNumber x4 = NexNumber(1, 11, "x4");
NexDSButton bt10 = NexDSButton(2, 20, "bt10");
NexDSButton bt11 = NexDSButton(2, 21, "bt11");
NexText t8 = NexText(2, 16, "t8");
NexText t9 = NexText(2, 17, "t9");
NexText t10 = NexText(2, 18, "t10");
NexText t11 = NexText(2, 19, "t11");
NexText t12 = NexText(2, 20, "t12");
NexText t13 = NexText(2, 21, "t13");
NexNumber n0 = NexNumber(3, 29, "n0");
NexNumber n1 = NexNumber(3, 7, "n1");
NexNumber n2 = NexNumber(3, 8, "n2");
NexNumber n3 = NexNumber(3, 9, "n3");
NexNumber n4 = NexNumber(3, 10, "n4");
NexButton b13 = NexButton(3, 30, "b13");
NexDSButton bt0 = NexDSButton(4, 16, "bt0");
NexDSButton bt1 = NexDSButton(4, 17, "bt1");
NexDSButton bt2 = NexDSButton(4, 18, "bt2");
NexDSButton bt3 = NexDSButton(4, 19, "bt3");
NexDSButton bt4 = NexDSButton(4, 20, "bt4");
NexDSButton bt5 = NexDSButton(4, 21, "bt5");
int ttPWM = LOW;
long th = 0, tl = 0, h = 0, l = 0;
int ppm = 0; // khai bao cac thong so de do cb co2
int nhietdo = 0;
int doam = 0;
int doamdat = 0;
int cambienco2 = 0;
int ttchedochinhtay = 0;
int ttchedotudong = 0;
float cbanhsang;
// khai bao cac chan cam bien va relay
int cbdoamdat = A0;
#define quatthoi 25
#define quathut 27
#define bom 29
#define den 31
#define pwmPin 5 // cam bien
uint32_t chedochinhtay = 0;
uint32_t chedotudong = 0;
uint32_t dkbom = 0;
uint32_t dkden = 0;
uint32_t dkquathut = 0;
uint32_t dkquatthoi = 0;
uint32_t dkluoiche = 0;
uint32_t nhietdogh = 0;
uint32_t doamgh = 0;
uint32_t doamdatgh = 0;
uint32_t anhsanggh = 0;
uint32_t co2gh = 0;
char buffer[250];

NexTouch *nex_listen_list[] = {
    &x0,
    &x1,
    &x2,
    &x3,
    &x4,
    &bt10,
    &bt11,
    &b13,
    &bt0,
    &bt1,
    &bt2,
    &bt3,
    &bt4,
    &bt5,

    NULL};
void setup()
{
  Serial.begin(9600);
  delay(1000);
  dht.begin();
  tsl.enableAutoRange(true);                            // Tự động điều chỉnh phạm vi đo
  tsl.setIntegrationTime(TSL2561_INTEGRATIONTIME_13MS); // Thời gian tích hợp 13ms
  /* Set the baudrate which is for debug and communicate with Nextion screen. */
  nexInit();
  // pinMode(25, OUTPUT);
  // pinMode(27, OUTPUT);
  // pinMode(29, OUTPUT);
  // pinMode(31, OUTPUT);
  pinMode(13, OUTPUT);
  pinMode(5, OUTPUT);
  pinMode(cbdoamdat, INPUT);
  pinMode(pwmPin, INPUT); // set chan input doc cam bien co2
}

void setup_routing() {

  server.on("/enviroment", getEnviroment);

  server.begin();

}

void getEnviroment() {
  // Tạo nội dung phản hồi dưới dạng JSON với giá trị động

  String jsonResponse = "{";
  jsonResponse += "\"ppm\": " + String(ppm) + ",";
  jsonResponse += "\"nhietdo\": " + String(nhietdo) + ",";
  jsonResponse += "\"doam\": " + String(doam) + ",";
  jsonResponse += "\"doamdat\": " + String(doamdat) + ",";
  jsonResponse += "\"cambienco2\": " + String(cambienco2);
  jsonResponse += "}";

  // Gửi phản hồi HTTP với mã trạng thái 200 (OK) và nội dung JSON
  server.send(200, "application/json", jsonResponse);
}



void dieukhienchinhtay()
{
  bt0.getValue(&dkbom);
  bt1.getValue(&dkden);
  bt2.getValue(&dkluoiche);
  bt3.getValue(&dkquathut);
  bt4.getValue(&dkquatthoi);
  if (dkbom == 1)
  {
    digitalWrite(5, HIGH);
    t8.setText("ON");
  }
  else if (dkbom == 0)
  {
    digitalWrite(5, LOW);
    t8.setText("OFF");
  }
  if (dkden == 1)
  {
    digitalWrite(5, HIGH);
    t8.setText("ON");
  }
  else if (dkden == 0)
  {
    digitalWrite(5, LOW);
    t8.setText("OFF");
  }
  if (dkquathut == 1)
  {
    digitalWrite(5, HIGH);
    t8.setText("ON");
  }
  else if (dkquathut == 0)
  {
    digitalWrite(5, LOW);
    t8.setText("OFF");
  }
  if (dkquatthoi == 1)
  {
    digitalWrite(5, HIGH);
    t8.setText("ON");
  }
  else if (dkquatthoi == 0)
  {
    digitalWrite(5, LOW);
    t8.setText("OFF");
  }
  nexLoop(nex_listen_list);
}
void dieukhientudong()
{
  n0.getValue(&nhietdogh);
  n1.getValue(&doamgh);
  n2.getValue(&doamdatgh);
  n3.getValue(&anhsanggh);
  n4.getValue(&co2gh);
}
void docgiatricambien()
{
  // cambiennhietdo
  nhietdo = dht.readTemperature(); // Đọc nhiệt độ C
  doam = dht.readHumidity();       // Đọc độ ẩm
  // cambienanhsang
  sensors_event_t event;
  tsl.getEvent(&event);
  cbanhsang = event.light; // luu gia tri cb anh sang vao bien
  // cam bien do am dat
  int dat = analogRead(A0);
  doamdat = map(dat, 0, 1023, 100, 0);
  long tt = millis();
  int PWM = digitalRead(pwmPin);
  // Nếu tín hiệu là HIGH
  if (PWM == HIGH)
  {
    if (PWM != ttPWM)
    {
      h = tt;
      if (l != 0)
      {
        tl = h - l;
        ppm = 5000 * (th - 2) / (th + tl - 4);
        Serial.println(ppm);
      }
      ttPWM = PWM;
    }
  }
  else
  { // Nếu tín hiệu là LOW
    if (PWM != ttPWM)
    {
      l = tt;
      if (h != 0)
      {
        th = l - h;
      }
      ttPWM = PWM;
    }
  }
}
void hienthigiatricambien()
{
  x0.setValue(nhietdo * 10);
  x1.setValue(doam * 10);
  x2.setValue(doamdat * 10);
  x3.setValue(cbanhsang * 10);
  x4.setValue(ppm * 10);
}
void loop()
{
  docgiatricambien();
  hienthigiatricambien();
  bt10.getValue(&chedochinhtay);
  bt11.getValue(&chedotudong);
  delay(200);
  if (chedochinhtay == 1)
  {
    dieukhienchinhtay();
  }
  // che do chinh tay tat
  else if (chedochinhtay == 0)
  {
    digitalWrite(25, LOW);
    t8.setText("OFF");
    digitalWrite(27, LOW);
    t9.setText("OFF");
    digitalWrite(29, LOW);
    t10.setText("OFF");
    digitalWrite(31, LOW);
    t11.setText("OFF");
    digitalWrite(13, LOW);
    t12.setText("OFF");
  }
  if (chedotudong == 1)
  {
    dieukhientudong();
  }
}