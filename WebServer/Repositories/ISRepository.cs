using WebServer.Models;

namespace WebServer.Repositories;
public interface ISRepository<T> where T : BaseEntity<Guid>
{
    Task<T> GetAsync(Guid id, string type);
    Task<List<T>> GetAllAsync(string type);
    Task CreateAsync(T data);
    Task UpdateAsync(T data);
    Task DeleteAsync(Guid id, string type);
}
