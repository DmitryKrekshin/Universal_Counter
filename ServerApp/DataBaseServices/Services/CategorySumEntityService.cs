namespace DataBaseServices;

public class CategorySumEntityService : ICategorySumEntity
{
    private readonly Context _context;

    public CategorySumEntityService(Context context)
    {
        _context = context;
    }
    
    public void Add(CategorySumEntity categorySumEntity)
    {
        _context.CategorySums.AddAsync(categorySumEntity);
        _context.SaveChangesAsync();
    }

    public void Update(CategorySumEntity categorySumEntity)
    {
        var categorySumToUpdate = _context.CategorySums.Find(categorySumEntity.CategoryEntityId);

        if (categorySumToUpdate == null)
        {
            throw new NullReferenceException("CategorySum doesn't exists");
        }

        categorySumToUpdate = categorySumEntity;
        _context.SaveChangesAsync();
    }

    public void Delete(int categorySumId)
    {
        var categorySumToDelete = _context.CategorySums.Find(categorySumId);
        
        if (categorySumToDelete == null)
        {
            throw new NullReferenceException("CategorySum doesn't exists");
        }

        _context.CategorySums.Remove(categorySumToDelete);
        _context.SaveChangesAsync();
    }

    public IEnumerable<CategorySumEntity> Get(Func<CategorySumEntity, bool> predicate)
    {
        return _context.CategorySums.Where(predicate).ToList();
    }
}