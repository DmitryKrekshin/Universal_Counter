namespace DataBaseServices;

public class AmountHistoryService : IAmountHistoryService
{
    private readonly Context _context;

    public AmountHistoryService(Context context)
    {
        _context = context;
    }
    
    public void Add(AmountHistoryEntity amountHistoryEntity)
    {
        _context.AmountHistory.AddAsync(amountHistoryEntity);
        _context.SaveChangesAsync();
    }

    public void Update(AmountHistoryEntity amountHistoryEntity)
    {
        var amountHistoryEntityToUpdate = _context.AmountHistory.Find(amountHistoryEntity.Id);

        if (amountHistoryEntityToUpdate == null)
        {
            throw new NullReferenceException("AmountHistory doesn't exists");
        }

        amountHistoryEntityToUpdate = amountHistoryEntity;
        _context.SaveChangesAsync();
    }

    public void Delete(AmountHistoryEntity amountHistoryEntity)
    {
        var amountHistoryEntityToDelete = _context.AmountHistory.Find(amountHistoryEntity.Id);

        if (amountHistoryEntityToDelete == null)
        {
            throw new NullReferenceException("AmountHistory doesn't exists");
        }

        _context.AmountHistory.Remove(amountHistoryEntityToDelete);
        _context.SaveChangesAsync();
    }

    public IEnumerable<AmountHistoryEntity> Get(Func<AmountHistoryEntity, bool> predicate)
    {
        return _context.AmountHistory.Where(predicate).ToList();
    }
}