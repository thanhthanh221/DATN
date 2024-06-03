using Microsoft.AspNetCore.Mvc;
using WebServer.Models;
using WebServer.Repositories;

namespace WebServer.Controllers;
[ApiController]
[Route("smartfarm/v1/api/schedule")]
public class ScheduleSmartFarmController : ControllerBase
{
    private readonly ISRepository<ScheduleSmartFarm> scheduleRepository;

    public ScheduleSmartFarmController(ISRepository<ScheduleSmartFarm> scheduleRepository)
    {
        this.scheduleRepository = scheduleRepository;
    }

    [HttpGet]
    [Route("{scheduleId}")]
    public async Task<ActionResult<ScheduleSmartFarm>> GetCheduleByIdAsync(Guid scheduleId)
    {
        var schedule = await scheduleRepository.GetAsync(scheduleId, nameof(ScheduleSmartFarm));
        return Ok(schedule);
    }

    [HttpGet]
    public async Task<ActionResult<ScheduleSmartFarm>> GetCheduleAsync(int take, int skip)
    {
        var schedule = (await scheduleRepository.GetAllAsync(nameof(ScheduleSmartFarm))).Skip(skip).Take(take);
        return Ok(schedule);
    }

    [HttpPost]
    public async Task<ActionResult<ScheduleSmartFarm>> CreateCheduleAsync(ScheduleSmartFarm schedule)
    {
        await scheduleRepository.CreateAsync(schedule);
        return Ok();
    }

    [HttpPut]
    public async Task<ActionResult<ScheduleSmartFarm>> UpdateCheduleAsync(ScheduleSmartFarm schedule)
    {
        await scheduleRepository.UpdateAsync(schedule);
        return Ok();
    }

}
