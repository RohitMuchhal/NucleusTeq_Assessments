// Thread using Thread class
class MyThread extends Thread 
{
    public void run() {
        for (int i = 1; i <= 5; i++) {
            System.out.println("Thread Class: " + i);
            try {
                Thread.sleep(500);
            } catch (InterruptedException e) {
                System.out.println(e.getMessage());
            }
        }
    }
}

// Thread using Runnable interface
class MyRunnable implements Runnable 
{
    public void run() {
        for (int i = 1; i <= 5; i++) {
            System.out.println("Runnable Interface: " + i);
            try {
                Thread.sleep(500);
            } catch (InterruptedException e) {
                System.out.println(e.getMessage());
            }
        }
    }
}

// Main class
public class Multithreading 
{
    public static void main(String[] args) {
       
        MyThread t1 = new MyThread();
        
       
        Thread t2 = new Thread(new MyRunnable());

        t1.start();
        t2.start();
    }
}
