using System.ComponentModel.DataAnnotations.Schema;

namespace DataBaseServices;

/// <summary>
/// История изменения сумм
/// </summary>
[Table("AmountHistory")]
public class AmountHistoryEntity
{
    /// <summary>
    /// Id записи истории
    /// </summary>
    public int Id { get; set; }

    /// <summary>
    /// Id категории
    /// </summary>
    [ForeignKey("CategoryEntity")]
    public int CategoryEntityId { get; set; }

    /// <summary>
    /// Ссылка на связанный объект категории
    /// </summary>
    public virtual CategoryEntity? CategoryEntity { get; set; }

    /// <summary>
    /// Id пользователя, совершившего действие
    /// </summary>
    [ForeignKey("User")]
    public int UserEntityId { get; set; }

    /// <summary>
    /// Ссылка на связанный объект пользователя
    /// </summary>
    public virtual UserEntity? UserEntity { get; set; }

    /// <summary>
    /// Id типа действия
    /// </summary>
    public int MovementTypeId { get; set; }

    /// <summary>
    /// Значение
    /// </summary>
    public double Value { get; set; }

    /// <summary>
    /// Время совершения действия
    /// </summary>
    public DateTime ActionDateTime { get; set; }
}