import java.util.Scanner;
public class Fibonacci {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the number: ");
        int total = sc.nextInt();
        
        int a = 0, b = 1;
        System.out.print("Fibonacci Series ");
        for(int i = 1; i <= total; i++){
            System.out.print(a + " ");
            int next = a + b;
            a = b;
            b = next;
        }
    }
}