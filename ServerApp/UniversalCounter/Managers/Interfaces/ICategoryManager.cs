namespace Category;

public interface ICategoryManager
{
    bool CreateCategory(ICategory category, IUser user, int? categoryParent = null);
    
    bool CreateCategory(ICategory category, int userId, int? categoryParent = null);

    bool EditCategory(ICategory updatedCategory);

    bool DeleteCategory(ICategory categoryToDelete);
    
    bool DeleteCategory(int categoryId);

    Category GetCategory(int categoryId);

    IEnumerable<Category> GetCategories(List<int> categoryIds);
    
    IEnumerable<Category> GetCategories(int userId);
}