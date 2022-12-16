namespace DataBaseServices;

public interface IAmountHistoryService
{
    void Add(AmountHistoryEntity amountHistoryEntity);

    void Update(AmountHistoryEntity amountHistoryEntity);

    void Delete(AmountHistoryEntity amountHistoryEntity);

    IEnumerable<AmountHistoryEntity> Get(Func<AmountHistoryEntity, bool> predicate);
}