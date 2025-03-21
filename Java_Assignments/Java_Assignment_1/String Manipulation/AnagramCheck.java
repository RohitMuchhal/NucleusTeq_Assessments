import java.util.Scanner;
import java.util.Arrays;
public class AnagramCheck 
{
    public static boolean CheckAnagrams(String str1, String str2) 
    {
        if (str1.length() != str2.length()) 
        {
            return false;
        }
        char[] arr1 = str1.toLowerCase().toCharArray();
        char[] arr2 = str2.toLowerCase().toCharArray();
        Arrays.sort(arr1);
        Arrays.sort(arr2);
        return Arrays.equals(arr1, arr2);
    }

    public static void main(String[] args) 
    {
        Scanner sc= new Scanner(System.in);
        System.out.print("Enter first string: ");
        String str1 = sc.nextLine();
        System.out.print("Enter second string: ");
        String str2 = sc.nextLine();
        if (CheckAnagrams(str1, str2)) 
        {
            System.out.println("The strings are anagrams.");
        } 
        else 
        {
            System.out.println("The strings are not anagrams.");
        }
    }
}