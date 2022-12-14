import java.util.Scanner;
import java.util.Vector;

public class Practice {
	
	public void practice1() {
		Scanner scanner = new Scanner(System.in);
		
		int n = scanner.nextInt();
		int sum = 0;
		
		for (int i=0; i<n; i++) {
			try {
				int num = scanner.nextInt();
				if (num < 0) throw new MinusException();
				sum += num;
			} catch (MinusException e) {
				e.printStackTrace();
			}
		}
		System.out.println(sum);
		scanner.close();
	}
	
	public void practice2() {
		Scanner scanner = new Scanner(System.in);
		int n = scanner.nextInt();
		
		Vector<String> fruits = new Vector<>();
		
		for (int i=0; i<n; i++) {
			String fruit = scanner.next();
			fruits.addElement(fruit);
		}
		
		System.out.println("몇 번째 과일을 가져올까요?");
		int i = scanner.nextInt();
		
		System.out.println(fruits.get(i-1));
		
	}
}
