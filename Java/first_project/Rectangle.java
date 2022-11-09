package first_project;

public class Rectangle {
	
	private int width;
	private int height;
	private static int count = 0;
	
	// static으로 선언하면 객체별로 생성되지 않고, 클래스별로 메모리가 할당되어서 생성된다.
	private static double pi = 3.14;
	
	public static void test() {
		// static 메소드에서는 non-static 멤버에 접근할 수 없다.
		// static은 클래스가 생성될 때 메모리 공간이 할당되는데
		// non-static은 객체가 생성될 때 공간을 할당 받기 때문에
		// this도 사용 불가
		// width = 1;
	}
	
	public Rectangle(int width) {
		this.width = width;
	}
	
	// getter:
	public int getWidth() {
		pi = 3.14152;
		return width;
	}
	
	public int getHeight() {
		return height;
	}
	
	public static int getCount() {
		return count;
	}
	
	public static double getPi() {
		return pi;
	}
	
	// setter
	public void setWidth(int width) {
		this.width = width;
	}
	
	public void setHeight(int height) {
		this.height = height;
	}
	
	public static void setCount(int num) {
		count = num;
	}
	
	public int area() {
		return width * height;
	}
	
}
