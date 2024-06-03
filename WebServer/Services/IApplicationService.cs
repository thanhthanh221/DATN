using WebServer.Models;

namespace WebServer.Services;
public interface IApplicationService
{
    Task<EnviromentSmartFarm> GetEnviromentStatus();
    Task UpdateEnviromentStatus();

}
