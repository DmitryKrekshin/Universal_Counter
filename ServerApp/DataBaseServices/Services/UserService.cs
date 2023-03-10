namespace DataBaseServices;

public class UserService : IUserService
{
    private readonly Context _context;

    public UserService(Context context) => _context = context;

    public void Add(UserEntity userEntity)
    {
        _context.Users.AddAsync(userEntity);
        _context.SaveChangesAsync();
    }

    public void Update(UserEntity userEntity)
    {
        var userToUpdate = _context.Users.Find(userEntity.Id);

        if (userToUpdate == null)
        {
            throw new NullReferenceException("User doesn't exists");
        }

        userToUpdate = userEntity;
        _context.SaveChangesAsync();
    }
    
    public void Delete(int userId)
    {
        var userToDelete = _context.Users.Find(userId);

        if (userToDelete == null)
        {
            throw new NullReferenceException("User doesn't exists");
        }

        _context.Users.Remove(userToDelete);
        _context.SaveChangesAsync();
    }

    public IEnumerable<UserEntity> Get(Func<UserEntity, bool> predicate)
    {
        return _context.Users.Where(predicate).ToList();
    }
}