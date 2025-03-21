import java.util.Scanner;
public class ReverseString{
    public static void main(String[] args)
    {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a string: ");
        String str = sc.nextLine();
        String reversedString = "";
        int size=str.length();

        for(int i = size - 1; i >= 0; i--)
        {
            reversedString += str.charAt(i);
        }
        System.out.println("Reversed string: " + reversedString);
    }
}