using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DataBaseServices;

[Table("User")]
public class UserEntity
{
    public int Id { get; set; }

    [MaxLength(128), Required]
    public string Name { get; set; }

    [MaxLength(128), Required]
    public string Email { get; set; }
    
    [MaxLength(512), Required]
    public string Password { get; set; }
}