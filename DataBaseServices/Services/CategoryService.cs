namespace DataBaseServices;

public class CategoryService : ICategoryService
{
    private readonly Context _context;

    public CategoryService(Context context)
    {
        _context = context;
    }
    
    public void Add(CategoryEntity categoryEntity)
    {
        _context.Categories.AddAsync(categoryEntity);
        _context.SaveChangesAsync();
    }

    public void Update(CategoryEntity categoryEntity)
    {
        var categoryToUpdate = _context.Categories.Find(categoryEntity.Id);

        if (categoryToUpdate == null)
        {
            throw new NullReferenceException("Category doesn't exists");
        }

        categoryToUpdate = categoryEntity;
        _context.SaveChangesAsync();
    }
    
    public void Delete(int categoryId)
    {
        var categoryToDelete = _context.Categories.Find(categoryId);

        if (categoryToDelete == null)
        {
            throw new NullReferenceException("Category doesn't exists");
        }

        _context.Categories.Remove(categoryToDelete);
        _context.SaveChangesAsync();
    }

    public IEnumerable<CategoryEntity> Get(Func<CategoryEntity, bool> predicate)
    {
        return _context.Categories.Where(predicate).ToList();
    }
}