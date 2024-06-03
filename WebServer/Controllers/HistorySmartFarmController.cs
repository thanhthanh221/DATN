using Microsoft.AspNetCore.Mvc;
using WebServer.Models;
using WebServer.Repositories;

namespace WebServer.Controllers;
[ApiController]
[Route("smartfarm/v1/api/history")]
public class HistorySmartFarmController : ControllerBase
{
    private readonly ISRepository<HistorySmartFarm> historyRepository;

    public HistorySmartFarmController(ISRepository<HistorySmartFarm> historyRepository)
    {
        this.historyRepository = historyRepository;
    }

    [HttpPost]
    public async Task<ActionResult<EnviromentSmartFarm>> GetEnviromentAsync(HistorySmartFarm history)
    {
        await historyRepository.CreateAsync(history);
        return Ok();
    }
}
