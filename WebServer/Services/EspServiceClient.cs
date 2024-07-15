using Newtonsoft.Json;
using WebServer.Options;

namespace WebServer.Services;

public class EspServiceClient : IEspServiceClient
{
    public async Task<EspEnviroment> GetEnviromentStatusInEsp()
    {
        HttpClient httpClient = new();

        var dataEnviroment = await httpClient.GetStringAsync("http://192.168.0.109/esp/api/environment");

        var enviromentInEsp = JsonConvert.DeserializeObject<EspEnviroment>(dataEnviroment);

        return enviromentInEsp;
    }
}
