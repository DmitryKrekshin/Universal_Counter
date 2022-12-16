using System.ComponentModel.DataAnnotations.Schema;

namespace DataBaseServices;

[Table("AmountHistory")]
public class AmountHistoryEntity
{
    public int Id { get; set; }

    [ForeignKey("CategoryEntity")]
    public int CategoryEntityId { get; set; }

    public virtual CategoryEntity? CategoryEntity { get; set; }

    [ForeignKey("User")]
    public int UserEntityId { get; set; }

    public virtual UserEntity? UserEntity { get; set; }

    public int MovementTypeId { get; set; }

    public double Value { get; set; }
}