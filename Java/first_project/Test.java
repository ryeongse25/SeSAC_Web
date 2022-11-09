package first_project;

import second.Second;

// public으로 선언하면 어디서든 사용이 가능하다
public class Test {
	
	// 필드(변수) 선언
	public int num;
	public String str = "abc";
	
	// 생성자 (생성자는 리턴 타입을 적지 않는다)
	public Test(int num) {
		// this.num은 클래스의 전역변수
		// num은 매개변수로 받은 지역변수
		this.num = num;
	}
	
	// 메서드
	public void testMethod() {
		
		Second sec = new Second();
//		int a = sec.num;
		
		System.out.println("test");
	}
}
