public class EvenSum{
    public static void main(String[] args){
        int sum = 0;
        int i = 2;
        
        while(i <= 10){
            if(i % 2 == 0){
                sum += i;
            }
            i=i+2;
        }
        
        System.out.println("The sum of even numbers from 1 to 10 is: " + sum);
    }
}