namespace WebServer.Models;
public abstract class BaseEntity<T>
{
    public T Id { get; set; }
    public abstract string Type { get; set; }
}
