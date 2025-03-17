import java.util.Scanner;
class Student 
{
    private String name;
    private int rollNumber;
    private double marks;

    public Student(String name, int rollNumber, double marks) {
        this.name = name;
        this.rollNumber = rollNumber;
        this.marks = marks;
    }

    // Getter and Setter methods (Encapsulation)
    public String getName() 
    { 
        return name; 
    }
    public int getRollNumber() 
    { 
        return rollNumber; 
    }
    public double getMarks() 
    { 
        return marks; 
    }

    public void setName(String name)
    {
        this.name=name;
    }

    public void setRollno(int rollno)
    {
        this.rollNumber=rollno;
    }

    public void setMarks(double marks)
    {
        this.marks=marks;
    }

    public void displayInfo() 
    {
        System.out.println("Student Name: " + name);
        System.out.println("Roll Number: " + rollNumber);
        System.out.println("Marks: " + marks);
    }

    //Method Overloading (Polymorphism)
    public void displayInfo(String extraInfo) 
    { 
        System.out.println("Student Name: " + name + " (" + extraInfo + ")");
    }
}

//Inheritance
class GraduateStudent extends Student {
    private String researchTopic;
    private String MentorName;

    public GraduateStudent(String name, int rollNumber, double marks, String researchTopic,String MentorName) {
        super(name, rollNumber, marks);
        this.researchTopic = researchTopic;
        this.MentorName=MentorName;
    }

    // Method Overriding (Polymorphism)
    public void displayInfo() {
        super.displayInfo();
        System.out.println("Research Topic: " + researchTopic);
        System.out.println("Mentor's Name: " + MentorName);
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter the name of Student");
        String name=sc.nextLine();

        System.out.println("Enter the Rollno of Student");
        int rollno=sc.nextInt();

        System.out.println("Enter the Marks of Student");
        double marks=sc.nextDouble();

        sc.nextLine();

        System.out.println("Enter the Research Topic of Student");
        String ResTopic=sc.nextLine();

        System.out.println("Enter the Mentor's name of Student");
        String Mentorname=sc.nextLine();

        Student s1 = new Student(name,rollno,marks);
        System.out.println();
        //s1.setName("Rahul");
        s1.displayInfo();
        // s1.setMarks(50); U can edit the marks of the student using the setter method
        // s1.displayInfo();
        System.out.println();

        GraduateStudent gs1 = new GraduateStudent(name,rollno,marks,ResTopic,Mentorname);
        gs1.displayInfo(); 
    }
}
