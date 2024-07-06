
using Microsoft.Extensions.Caching.Distributed;
using Newtonsoft.Json;
using StackExchange.Redis;
using WebServer.Models;

namespace WebServer.Repositories;
public class SRepository<T> : ISRepository<T> where T : BaseEntity<Guid>
{
    private readonly IConnectionMultiplexer _connectionMultiplexer;

    public SRepository(IConnectionMultiplexer connectionMultiplexer)
    {
        _connectionMultiplexer = connectionMultiplexer;
    }
    public async Task CreateAsync(T data)
    {
        var db = _connectionMultiplexer.GetDatabase();
        var key = $"{data.Type}:{data.Id}";
        var value = JsonConvert.SerializeObject(data);
        await db.StringSetAsync(key, value);
    }

    public async Task DeleteAsync(Guid id, string type)
    {
        var db = _connectionMultiplexer.GetDatabase();
        var key = $"{type}:{id}";
        await db.KeyDeleteAsync(key);
    }

    public async Task<List<T>> GetAllAsync(string type)
    {
        var db = _connectionMultiplexer.GetDatabase();
        var keys = GetKeyAsync(type + "*");

        var sensorDataList = new List<T>();
        foreach (var key in keys)
        {
            var value = await db.StringGetAsync(key);

            if (!value.IsNullOrEmpty)
            {
                sensorDataList.Add(JsonConvert.DeserializeObject<T>(value));
            }
        }

        return sensorDataList;
    }

    public async Task<T> GetAsync(Guid id, string type)
    {
        var db = _connectionMultiplexer.GetDatabase();
        var key = $"{type}:{id}";
        var value = await db.StringGetAsync(key);

        if (value.IsNullOrEmpty)
        {
            return null;
        }

        return JsonConvert.DeserializeObject<T>(value);
    }

    public async Task UpdateAsync(T data) => await CreateAsync(data);

    private IEnumerable<string> GetKeyAsync(string pattern)
    {
        foreach (var endPoint in _connectionMultiplexer.GetEndPoints())
        {
            var server = _connectionMultiplexer.GetServer(endPoint);

            foreach (var key in server.Keys(pattern: pattern))
            {
                yield return key.ToString();
            }
        }
    }
}
