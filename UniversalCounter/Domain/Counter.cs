namespace Category;

public class Counter : ICounter
{
    private double _sum;
    
    public void Add(double value)
    {
        _sum += value;
    }

    public void Subtract(double value)
    {
        _sum -= value;
    }

    public double GetSum()
    {
        return _sum;
    }
}