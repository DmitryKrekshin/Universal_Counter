using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DataBaseServices;

/// <summary>
/// Категория
/// </summary>
[Table("Category")]
public class CategoryEntity
{
    /// <summary>
    /// Id категории
    /// </summary>
    public int Id { get; set; }
    
    /// <summary>
    /// Id пользователя владельца категории
    /// </summary>
    [ForeignKey("UserEntity")]
    public int UserEntityId { get; set; }
    
    /// <summary>
    /// Ссылка на связанную модель пользователя
    /// </summary>
    public virtual UserEntity? UserEntity { get; set; }

    /// <summary>
    /// Id категории родителя (если имеется)
    /// </summary>
    public int? ParentId { get; set; }
    
    /// <summary>
    /// Название категории
    /// </summary>
    [MaxLength(128), Required]
    public string Name { get; set; }

    /// <summary>
    /// Цвет
    /// </summary>
    [MaxLength(16)]
    public string? ColorHEX { get; set; }
    
    /// <summary>
    /// Ссылка на связанную актуальную сумму категории
    /// </summary>
    public virtual CategorySumEntity? CategorySumEntity { get; set; }
}