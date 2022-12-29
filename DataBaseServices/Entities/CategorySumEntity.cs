using System.ComponentModel;
using System.ComponentModel.DataAnnotations.Schema;

namespace DataBaseServices;

/// <summary>
/// Актуальная сумма категории
/// </summary>
[Table("CategorySum")]
public class CategorySumEntity
{
    /// <summary>
    /// Id категории
    /// </summary>
    [Column("CategoryId"), ForeignKey("CategoryEntity")]
    public int CategoryEntityId { get; set; }

    /// <summary>
    /// Актуальная сумма
    /// </summary>
    [DefaultValue(0)]
    public decimal CurrentSum { get; set; }
    
    /// <summary>
    /// Ссылка на связанную категорию
    /// </summary>
    public virtual CategoryEntity? CategoryEntity { get; set; }
}