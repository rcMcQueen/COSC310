package asd;
import java.io.*;
import java.util.Scanner;
public class RandNum {

	public static void main(String[] args) throws Exception {
		
		
		File file = new File("/Users/Ryan/Desktop/crime_shp_2015.csv");
		FileWriter fr = new FileWriter("/Users/Ryan/Desktop/CrimeData/crime_shp_2015.csv");
		BufferedWriter output = new BufferedWriter(fr);
		Scanner in = new Scanner(file);
		String current = "";
		
		while(in.hasNextLine() == true){
			current = in.nextLine();
		//Look for the specified character sequence within string and replace with the random numbers
		if(current.contains("XX")){
			current = current.replace("XX", (int)(Math.random() * ((99 - 10) + 1) + 10) + "");
			output.write(current + "\n");
			
		}
		else if(current.contains("X") && !(current.contains("ALEXANDER") && !(current.contains("COMOX"))) && !(current.contains("OXFORD"))
				&& !(current.contains("Expo"))){
			current = current.replace("X", (int)(Math.random() * ((9 - 0) + 1) + 0) + "");
			output.write(current + "\n");
		
		}
		else{
			current = in.next();
		}
		}
		in.close();
		output.close();
	}
	}
