import java.io.*;

public class FileReaderEx
{
    public static void main(String[] args) 
    {
        String filename="rohit.txt";
        try {
            
            BufferedReader reader = new BufferedReader(new FileReader(filename));

            String line;
            while ((line = reader.readLine()) != null) 
            { 
                System.out.println(line);
            }

            reader.close(); 
        } 
        catch(FileNotFoundException e)
        {
            System.out.println("Error File not found !");
        }
        catch (IOException e) 
        {
            System.out.println("Error reading the file: " + e.getMessage());
        }
    }
}
