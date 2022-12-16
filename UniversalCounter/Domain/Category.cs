using System.Drawing;

namespace Category;

public class Category : ICategory
{
    public int Id { get; set; }

    public string Name { get; set; }

    public Color Color { get; set; }

    public List<ICategory> ChildCategories { get; set; } = new();

    public ICounter? Counter { get; set; }
}