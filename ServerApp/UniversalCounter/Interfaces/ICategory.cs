using System.Drawing;

namespace Category;

public interface ICategory
{
    public int Id { get; set; }
    
    public string Name { get; set; }
    
    public Color Color { get; set; }
    
    public List<ICategory> ChildCategories { get; set; }

    public ICounter? Counter { get; set; }
}