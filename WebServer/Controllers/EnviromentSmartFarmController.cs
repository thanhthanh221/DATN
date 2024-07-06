using Microsoft.AspNetCore.Mvc;
using WebServer.Dto;
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
    public async Task<ActionResult> CreateEnviromentAsync(CreateUpdateEnviromentDto dto)
    {
        EnviromentSmartFarm enviroment = new(dto.SoilHumidity, dto.Lux, dto.Temperature, dto.CO2, dto.AirHumidity);

        await enviromentRepository.CreateAsync(enviroment);
        return Ok(enviroment);
    }

    [HttpPut]
    public async Task<ActionResult> UpdateEnviromentAsync(Guid enviromentId)
    {
        EnviromentSmartFarm enviroment = await enviromentRepository.GetAsync(enviromentId, nameof(EnviromentSmartFarm));

        Random rand = new();



        EnviromentSmartFarm enviromentUpdate = new() {
            Id = enviromentId,
            SoilHumidity = rand.Next(15,20)

        };
        await enviromentRepository.CreateAsync(enviroment);
        return Ok(enviroment);
    }
}
