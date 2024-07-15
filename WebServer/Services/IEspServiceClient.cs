using WebServer.Options;

namespace WebServer.Services;
public interface IEspServiceClient
{
    Task<EspEnviroment> GetEnviromentStatusInEsp();


}
