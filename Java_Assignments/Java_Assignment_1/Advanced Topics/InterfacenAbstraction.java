
interface Vehicle 
{
    // Abstract method (must be implemented)
    void start();
    void stop();
}

abstract class Car implements Vehicle {
    String brand;

    // Constructor
    public Car(String brand) {
        this.brand = brand;
    }

    // Concrete method
    public void showBrand() {
        System.out.println("Car Brand: " + brand);
    }

    // Abstract method
    abstract void fuelType();
}

class ElectricCar extends Car 
{
    public ElectricCar(String brand) 
    {
        super(brand);
    }

    // Implementing abstract method from Car
    @Override
    void fuelType() {
        System.out.println("Fuel Type: Electric");
    }

    // Implementing interface methods
    @Override
    public void start() {
        System.out.println("Electric Car is starting silently...");
    }

    @Override
    public void stop() {
        System.out.println("Electric Car is stopping...");
    }
}

// Main Class
public class InterfacenAbstraction 
{
    public static void main(String[] args) {
        ElectricCar tesla = new ElectricCar("Tesla");
        tesla.showBrand();
        tesla.start();
        tesla.fuelType();
        tesla.stop();
    }
}
