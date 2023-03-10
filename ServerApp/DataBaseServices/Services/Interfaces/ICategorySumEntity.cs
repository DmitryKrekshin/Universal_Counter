namespace DataBaseServices;

public interface ICategorySumEntity
{
    public void Add(CategorySumEntity categorySumEntity);

    public void Update(CategorySumEntity categorySumEntity);

    public void Delete(int categorySumId);

    public IEnumerable<CategorySumEntity> Get(Func<CategorySumEntity, bool> predicate);
}