import java.util.Scanner;
public class CountVowels{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a string: ");
        String str = sc.nextLine();
        int vowelcount = 0;
        for(int i = 0; i < str.length(); i++){
            char ch = str.charAt(i);
            if(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' || 
               ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U'){
                vowelcount++;
            }
        }
        System.out.println("Number of vowels: " + vowelcount);
    }
}