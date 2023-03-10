namespace DataBaseServices;

public interface IUserService
{
    public void Add(UserEntity userEntity);

    public void Update(UserEntity userEntity);

    public void Delete(int userId);

    public IEnumerable<UserEntity> Get(Func<UserEntity, bool> predicate);
}