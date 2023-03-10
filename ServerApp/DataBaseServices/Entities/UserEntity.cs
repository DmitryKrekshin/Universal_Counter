using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DataBaseServices;

/// <summary>
/// Пользователь
/// </summary>
[Table("User")]
public class UserEntity
{
    /// <summary>
    /// Id пользователя
    /// </summary>
    public int Id { get; set; }

    /// <summary>
    /// Имя пользователя
    /// </summary>
    [MaxLength(128), Required]
    public string FirstName { get; set; }

    /// <summary>
    /// Фамилия пользователя
    /// </summary>
    [MaxLength(128)]
    public string SecondName { get; set; }
    
    /// <summary>
    /// Адрес электронной почты
    /// </summary>
    [MaxLength(128), Required]
    public string Email { get; set; }
    
    /// <summary>
    /// Пароль
    /// </summary>
    [MaxLength(512), Required]
    public string Password { get; set; }
}