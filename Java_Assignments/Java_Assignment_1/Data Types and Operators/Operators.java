import java.util.Scanner;
public class Operators{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter first number: ");
        int num1 = sc.nextInt();
        
        System.out.print("Enter second number: ");
        int num2 = sc.nextInt();
        
        //Arithmetic operators
        int sum = num1 + num2;
        int difference = num1 - num2;
        int product = num1 * num2;
        int quotient = num1 / num2;
        int remainder = num1 % num2;
        

        //Relational operators
        boolean Equalop = (num1 == num2);
        boolean NotEqualop = (num1 != num2);
        boolean GreaterThanop = (num1 > num2);
        boolean LessThanop = (num1 < num2);
        boolean GreaterThanOrEqualop = (num1 >= num2);
        boolean LessThanOrEqualop = (num1 <= num2);
        
        //Logical operators
        boolean andConditionop = (num1 > 0) && (num2 > 0);
        boolean orConditionop = (num1 > 0) || (num2 > 0);
        boolean notConditionop = !(num1 == num2);
        
        System.out.println("\nArithmetic Operations:");
        System.out.println("Sum: " + sum);
        System.out.println("Difference: " + difference);
        System.out.println("Product: " + product);
        System.out.println("Quotient: " + quotient);
        System.out.println("Remainder: " + remainder);
        
        System.out.println("\nRelational Operations:");
        System.out.println("Is equal: " + Equalop);
        System.out.println("Is not equal: " + NotEqualop);
        System.out.println("Is greater than: " + GreaterThanop);
        System.out.println("Is less than: " + LessThanop);
        System.out.println("Is greater than or equal: " + GreaterThanOrEqualop);
        System.out.println("Is less than or equal: " + LessThanOrEqualop);
        
        System.out.println("\nLogical Operations:");
        System.out.println("AND condition: " + andConditionop);
        System.out.println("OR condition: " + orConditionop);
        System.out.println("NOT condition: " + notConditionop);
    }
}