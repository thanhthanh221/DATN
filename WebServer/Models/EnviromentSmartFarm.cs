namespace WebServer.Models;
public class EnviromentSmartFarm : BaseEntity<Guid>
{
    public int SoilHumidity { get; set; }
    public int Lux { get; set; }
    public int Temperature { get; set; }
    public int CO2 { get; set; }
    public int AirHumidity { get; set; }
    public DateTime DatimeUpdate { get; set; }
    public override string Type { get; set; } = nameof(EnviromentSmartFarm);

    public EnviromentSmartFarm(int soilHumidity, int lux, int temperature, int cO2, int airHumidity)
    {
        Id = Guid.NewGuid();
        SoilHumidity = soilHumidity;
        Lux = lux;
        Temperature = temperature;
        CO2 = cO2;
        AirHumidity = airHumidity;
        DatimeUpdate = DateTime.Now;
    }

    public EnviromentSmartFarm()
    {
    }
}
