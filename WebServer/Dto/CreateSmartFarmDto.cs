using WebServer.Models;

namespace WebServer.Dto;
public class CreateSmartFarmDto : BaseDto
{
    public int StatusSchedule { get; set; }
    public List<ScheduleSmartFarmInfomation> Infomations { get; set; }
}
