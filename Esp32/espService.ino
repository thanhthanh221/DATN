#include <WiFi.h>
#include <WebServer.h>

// Thông tin WiFi
const char* ssid = "your_SSID";
const char* password = "your_PASSWORD";

// Khởi tạo WebServer trên cổng 80
WebServer server(80);

// Hàm xử lý khi truy cập vào route "/"
void GetHistory() {
  server.send(200, "application/json", "{\"message\": \"Hello World\"}");
}

void GetScript() {
  server.send(200, "application/json", "{\"message\": \"Hello World\"}");
}

// Thiết lập kết nối WiFi
void setup() {
  Serial.begin(115200);
  delay(100);

  // Kết nối WiFi
  Serial.println();
  Serial.print("Connecting to ");
  Serial.println(ssid);
  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.print(".");
  }

  Serial.println("");
  Serial.println("WiFi connected.");
  Serial.print("IP address: ");
  Serial.println(WiFi.localIP());

  // Cấu hình route cho server
  server.on("/", handleRoot);

  // Bắt đầu server
  server.begin();
  Serial.println("HTTP server started");
}

void loop() {
  // Xử lý các yêu cầu HTTP
  server.handleClient();
}