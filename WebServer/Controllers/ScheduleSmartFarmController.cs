using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Mvc;
using WebServer.Dto;
using WebServer.Models;
using WebServer.Repositories;

namespace WebServer.Controllers;
[ApiController]
[Route("smartfarm/v1/api/schedule")]
public class ScheduleSmartFarmController : ControllerBase
{
    private readonly ISRepository<ScheduleSmartFarm> scheduleRepository;
    private readonly ILogger<ScheduleSmartFarmController> logger;

    public ScheduleSmartFarmController(
        ISRepository<ScheduleSmartFarm> scheduleRepository,
        ILogger<ScheduleSmartFarmController> logger
        )
    {
        this.logger = logger;
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
            var schedule = (await scheduleRepository.GetAllAsync(nameof(ScheduleSmartFarm)))
                            .OrderByDescending(s => s.DateTimeAction);
        return Ok(schedule);
    }

    [HttpPost]
    public async Task<ActionResult> CreateCheduleAsync(CreateSmartFarmDto schedule)
    {
        ScheduleSmartFarm scheduleSmart = new()
        {
            Id = Guid.NewGuid(),
            StatusSchedule = schedule.StatusSchedule,
            Infomations = schedule.Infomations,
            DateTimeAction = DateTime.Parse(schedule.DateTimeAction)
        };
        await scheduleRepository.CreateAsync(scheduleSmart);

        logger.LogInformation("Create new Schedule");
        Console.WriteLine(schedule.DateTimeAction);

        return Ok();
    }

    [HttpPut]
    public async Task<ActionResult> UpdateCheduleAsync(
                                    [FromQuery] Guid scheduleId,
                                    [Required][Range(0, 3)] StatusSchedule statusSchedule)
    {
        var schedule = await scheduleRepository.GetAsync(scheduleId, nameof(ScheduleSmartFarm));

        if (schedule is null) return BadRequest();

        schedule.StatusSchedule = (int)statusSchedule;
        await scheduleRepository.UpdateAsync(schedule);

        return Ok();
    }

    [HttpDelete]
    public async Task<ActionResult> CancelCheduleAsync(
                                    [FromQuery] Guid scheduleId,
                                    [Required][Range(1, 4)] StatusSchedule statusSchedule)
    {
        var schedule = await scheduleRepository.GetAsync(scheduleId, nameof(ScheduleSmartFarm));

        if (schedule is null) return BadRequest();

        schedule.StatusSchedule = (int)statusSchedule;
        await scheduleRepository.UpdateAsync(schedule);

        return Ok();
    }
}
