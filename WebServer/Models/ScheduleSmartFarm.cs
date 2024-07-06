namespace WebServer.Models;
public class ScheduleSmartFarm : BaseEntity<Guid>
{
    public List<ScheduleSmartFarmInfomation> Infomations { get; set; }
    public DateTime DateTimeAction { get; set; }
    public int StatusSchedule { get; set; }
    public override string Type { get; set; } = nameof(ScheduleSmartFarm);
}
public class ScheduleSmartFarmInfomation
{
    public bool Status { get; set; }
    public string Infomation { get; set; }
}
public enum StatusSchedule
{
    NotYetActive = 0,
    IsActive,
    Cancelled,
    Complete
}
