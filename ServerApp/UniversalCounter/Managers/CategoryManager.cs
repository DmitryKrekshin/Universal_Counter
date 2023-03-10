using DataBaseServices;

namespace Category;

public class CategoryManager : ICategoryManager
{
    private readonly ICategoryService _categoryService;

    public CategoryManager(ICategoryService categoryService)
    {
        _categoryService = categoryService;
    }
    
    public bool CreateCategory(ICategory category, IUser user, int? categoryParent = null)
    {
        throw new NotImplementedException();
    }

    public bool CreateCategory(ICategory category, int userId, int? categoryParent = null)
    {
        throw new NotImplementedException();
    }

    public bool EditCategory(ICategory updatedCategory)
    {
        throw new NotImplementedException();
    }

    public bool DeleteCategory(ICategory categoryToDelete)
    {
        throw new NotImplementedException();
    }

    public bool DeleteCategory(int categoryId)
    {
        throw new NotImplementedException();
    }

    public Category GetCategory(int categoryId)
    {
        throw new NotImplementedException();
    }

    public IEnumerable<Category> GetCategories(List<int> categoryIds)
    {
        throw new NotImplementedException();
    }

    public IEnumerable<Category> GetCategories(int userId)
    {
        throw new NotImplementedException();
    }
}