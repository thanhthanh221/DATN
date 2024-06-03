namespace WebServer.Models;
public class HistorySmartFarm : BaseEntity<Guid>
{
    public int Code { get; set; }
    public bool Status { get; set; }
    public DateTime DateTime { get; set; }
    public List<string> Action { get; set; }
    public override string Type { get; set; } = nameof(HistorySmartFarm);
}
