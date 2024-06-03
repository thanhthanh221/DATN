namespace WebServer.Models;
public class ScheduleSmartFarm : BaseEntity<Guid>
{
    public StatusSchedule StatusSchedule;
    public List<ScheduleSmartFarmInfomation> Infomations { get; set; }
    public DateTime DateTimeAction { get; set; }
    public override string Type { get; set; } = nameof(ScheduleSmartFarm);
}
public class ScheduleSmartFarmInfomation
{
    public bool Status { get; set; }
    public string Infomation { get; set; }
}
public enum StatusSchedule
{
    NotYetActive,
    IsActive,
    Cancelled,
    Complete
}
