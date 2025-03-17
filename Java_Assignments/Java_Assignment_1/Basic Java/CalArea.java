import java.util.Scanner;

public class CalArea{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Choose shape: 1-Circle, 2-Rectangle, 3-Triangle");
        int choice = sc.nextInt();

        switch (choice) {
            case 1:
                System.out.print("Enter radius: ");
                double radius = sc.nextDouble();
                System.out.println("Area: " + (Math.PI * radius * radius));
                break;
            case 2:
                System.out.print("Enter length and width: ");
                double length = sc.nextDouble(), width = sc.nextDouble();
                System.out.println("Area: " + (length * width));
                break;
            case 3:
                System.out.print("Enter base and height: ");
                double base = sc.nextDouble(), height = sc.nextDouble();
                System.out.println("Area: " + ((base * height )/ 2));
                break;
            default:
                System.out.println("Invalid choice");
        }
     sc.close();
    }
}