namespace WebServer.Options;

public class EspEnviroment
{
    public EspEnviroment()
    {
    }

    public int SoilHumidity { get; set; }
    public int Lux { get; set; }
    public int Temperature { get; set; }
    public int CO2 { get; set; }
    public int AirHumidity { get; set; }
}
