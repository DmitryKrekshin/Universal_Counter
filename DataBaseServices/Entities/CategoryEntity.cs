using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DataBaseServices;

[Table("Category")]
public class CategoryEntity
{
    public int Id { get; set; }
    
    [ForeignKey("UserEntity")]
    public int UserEntityId { get; set; }
    
    public virtual UserEntity? UserEntity { get; set; }

    public int? ParentId { get; set; }
    
    [MaxLength(128), Required]
    public string Name { get; set; }

    [MaxLength(16)]
    public string? ColorHEX { get; set; }
    
    public virtual CategorySumEntity? CategorySumEntity { get; set; }
}