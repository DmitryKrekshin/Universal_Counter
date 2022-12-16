namespace DataBaseServices;

public interface IUserService
{
    public void AddUser(UserEntity userEntity);

    public void UpdateUser(UserEntity userEntity);

    public void DeleteUser(int userId);

    public IEnumerable<UserEntity> GetUsers(Func<UserEntity, bool> predicate);
}