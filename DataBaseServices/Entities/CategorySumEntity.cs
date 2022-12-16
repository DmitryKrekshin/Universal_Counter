using System.ComponentModel;
using System.ComponentModel.DataAnnotations.Schema;

namespace DataBaseServices;

[Table("CategorySum")]
public class CategorySumEntity
{
    [Column("CategoryId"), ForeignKey("CategoryEntity")]
    public int CategoryEntityId { get; set; }

    [DefaultValue(0)]
    public decimal CurrentSum { get; set; }
    
    public virtual CategoryEntity? CategoryEntity { get; set; }
}