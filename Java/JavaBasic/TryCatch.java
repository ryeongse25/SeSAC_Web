import java.util.InputMismatchException;
import java.util.Scanner;

public class TryCatch {
	
	public void inputException() {
		
		Scanner scanner = new Scanner(System.in);
		System.out.println("숫자를 입력해주세요");
		try {
			int num = scanner.nextInt();
			System.out.println("숫자 " + num);
		}
		catch(InputMismatchException e) {
			System.out.println("Not a Number");
		}
		scanner.close();
		
	}
}