package first_project;

import java.util.Scanner;
import java.util.ArrayList;

public class Main {

	public static void main(String[] args) {
		
		// static으로 선언하면 객체를 생성하지 않아도 접근 할 수 있다.
		Rectangle.getPi();
		
		ArrayList<Rectangle> rectArray = new ArrayList<>();
		Scanner scanner = new Scanner(System.in);
		
		int i = 1;
		
		while(true) {
			
			System.out.println("사각형의 가로와 세로 길이를 띄어쓰기를 기준으로 입력해주세요.");
			
			int width = scanner.nextInt();
			int height = scanner.nextInt();
			
			
			if (width == 0 && height == 0) break;
			
			Rectangle rectangle = new Rectangle(width);
			rectangle.setHeight(height);
			
			rectArray.add(rectangle);
			
			Rectangle.setCount(i++);
		}
		
//		for(int i=0; i<rectArray.size(); i++) {
//			System.out.println("가로 길이는: " + rectArray.get(i).getWidth());
//			System.out.println("세로 길이는: " + rectArray.get(i).getHeight());
//			System.out.println("넓이는: " + rectArray.get(i).area());
//			System.out.println("-------------------------");
//		}

		for(Rectangle value: rectArray) {
			System.out.println("가로 길이는: " + value.getWidth());
			System.out.println("세로 길이는: " + value.getHeight());
			System.out.println("넓이는: " + value.area());
			System.out.println("-------------------------");
		}
		
		System.out.println("Rectangle 인스턴스의 개수는: " + Rectangle.getCount());
		
		scanner.close();
		
	}

}