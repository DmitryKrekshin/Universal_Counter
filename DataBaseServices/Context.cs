using Microsoft.EntityFrameworkCore;

namespace DataBaseServices;

public class Context : DbContext
{
    public Context(DbContextOptions<Context> options) : base(options) { }

    public DbSet<AmountHistoryEntity> AmountHistory { get; set; } = null!;
    
    public DbSet<CategoryEntity> Categories { get; set; } = null!;
    
    public DbSet<CategorySumEntity> CategorySums { get; set; } = null!;
    
    public DbSet<UserEntity> Users { get; set; } = null!;
}