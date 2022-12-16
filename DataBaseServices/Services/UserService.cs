namespace DataBaseServices;

public class UserService : IUserService
{
    private readonly Context _context;

    public UserService(Context context) => _context = context;

    public void AddUser(UserEntity userEntity)
    {
        _context.Users.AddAsync(userEntity);
        _context.SaveChangesAsync();
    }

    public void UpdateUser(UserEntity userEntity)
    {
        var categoryToUpdate = _context.Users.Find(userEntity.Id);

        if (categoryToUpdate == null)
        {
            throw new NullReferenceException("User doesn't exists");
        }

        categoryToUpdate = userEntity;
        _context.SaveChangesAsync();
    }
    
    public void DeleteUser(int userId)
    {
        var userToDelete = _context.Users.Find(userId);

        if (userToDelete == null)
        {
            throw new NullReferenceException("User doesn't exists");
        }

        _context.Users.Remove(userToDelete);
        _context.SaveChangesAsync();
    }

    public IEnumerable<UserEntity> GetUsers(Func<UserEntity, bool> predicate)
    {
        return _context.Users.Where(predicate).ToList();
    }
}