namespace DataBaseServices;

public interface ICategoryService
{
    void Add(CategoryEntity categoryEntity);
    
    void Update(CategoryEntity categoryEntity);
    
    void Delete(int categoryId);
    
    public IEnumerable<CategoryEntity> Get(Func<CategoryEntity, bool> predicate);
}