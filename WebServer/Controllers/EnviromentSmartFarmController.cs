using Microsoft.AspNetCore.Mvc;
using WebServer.Dto;
using WebServer.Models;
using WebServer.Repositories;
using WebServer.Services;

namespace WebServer.Controllers;
[ApiController]
[Route("smartfarm/v1/api/enviroment")]
public class EnviromentSmartFarmController : ControllerBase
{
    private readonly ISRepository<EnviromentSmartFarm> enviromentRepository;
    private readonly IEspServiceClient espServiceClient;

    public EnviromentSmartFarmController(
        ISRepository<EnviromentSmartFarm> enviromentRepository,
        IEspServiceClient espServiceClient)
    {
        this.enviromentRepository = enviromentRepository;
        this.espServiceClient = espServiceClient;
    }

    [HttpGet]
    public async Task<ActionResult<EnviromentSmartFarm>> GetEnviromentAsync()
    {

        var enviromentInEsp = await espServiceClient.GetEnviromentStatusInEsp();

        EnviromentSmartFarm newEnviroment = new(enviromentInEsp.SoilHumidity, enviromentInEsp.Lux, enviromentInEsp.Temperature, enviromentInEsp.CO2, enviromentInEsp.AirHumidity);

        await enviromentRepository.CreateAsync(newEnviroment);

        return Ok(newEnviroment);
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

        EnviromentSmartFarm enviromentUpdate = new()
        {
            Id = enviromentId,
            SoilHumidity = rand.Next(15, 20),
            Lux = rand.Next(15, 40),
            Temperature = rand.Next(50, 100),
            CO2 = rand.Next(50, 400),
            AirHumidity = rand.Next(50, 70),
            DatimeUpdate = DateTime.Now
        };
        await enviromentRepository.UpdateAsync(enviroment);
        return Ok(enviroment);
    }
}
