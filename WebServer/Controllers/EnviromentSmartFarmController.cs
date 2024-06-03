using Microsoft.AspNetCore.Mvc;
using WebServer.Models;
using WebServer.Repositories;

namespace WebServer.Controllers;
[ApiController]
[Route("smartfarm/v1/api/enviroment")]
public class EnviromentSmartFarmController : ControllerBase
{
    private readonly ISRepository<EnviromentSmartFarm> enviromentRepository;

    public EnviromentSmartFarmController(ISRepository<EnviromentSmartFarm> enviromentRepository)
    {
        this.enviromentRepository = enviromentRepository;
    }

    [HttpGet]
    public async Task<ActionResult<EnviromentSmartFarm>> GetEnviromentAsync()
    {
        var enviroment = (await enviromentRepository.GetAllAsync(nameof(EnviromentSmartFarm)))
                        .OrderByDescending(e => e.DatimeUpdate).FirstOrDefault();
        return Ok(enviroment);
    }

    [HttpPost]
    public async Task<ActionResult> CreateEnviromentAsync()
    {
        var enviroment = (await enviromentRepository.GetAllAsync(nameof(EnviromentSmartFarm)))
                        .OrderByDescending(e => e.DatimeUpdate).FirstOrDefault();
        return Ok(enviroment);
    }
}
