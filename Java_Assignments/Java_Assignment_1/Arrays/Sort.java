import java.util.Scanner;
public class Sort{

     public static void bubbleSort(int[] arr){
        int n = arr.length;
        for(int i = 0; i < n - 1; i++){
            for(int j = 0; j < n - i - 1; j++){
                if(arr[j] > arr[j + 1]){
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }

    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter the size of array: ");
        int size = sc.nextInt();
        
        int[] arr = new int[size];
        
        System.out.println("Enter the elements:");
        
        for(int i = 0; i < size; i++)
        {
            arr[i] = sc.nextInt();
        }
        
        bubbleSort(arr);
        
        System.out.println("Sorted array:");

        for(int i = 0; i < size; i++)
        {
            System.out.print(arr[i] + " ");
        }
    }

}