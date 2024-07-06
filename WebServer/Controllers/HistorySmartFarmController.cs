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

    [HttpGet]
    public async Task<ActionResult<HistorySmartFarm>> GetHistoryAsync(int skip, int take)
    {
        var histories = (await historyRepository.GetAllAsync(nameof(HistorySmartFarm)))
                        .Skip(skip).Take(take);
        return Ok(histories);
    }

    [HttpPost]
    public async Task<ActionResult<HistorySmartFarm>> CreateHistoryAsync(HistorySmartFarm history)
    {
        await historyRepository.CreateAsync(history);
        return Ok();
    }
}
