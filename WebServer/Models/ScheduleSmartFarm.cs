namespace WebServer.Models;
public class ScheduleSmartFarm : BaseEntity<Guid>
{
    public StatusSchedule StatusSchedule;
    public List<string> Infomations { get; set; }
    public DateTime DateTimeAction { get; set; }
    public override string Type { get; set; } = nameof(ScheduleSmartFarm);
}
public enum StatusSchedule
{
    NotYetActive,
    IsActive,
    Cancelled,
    Complete
}
