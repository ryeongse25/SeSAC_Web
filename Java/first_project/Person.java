package first_project;

public abstract class Person {
	
	private int age;
	private String name;
	
	// 매소드 선언 (구현하지 않을 경우 abstract를 붙여줘야 한다)
	// 추상 매소드가 하나라도 있을 경우 추상 클래스가 된다
	// 추상 클래스로는 객체를 만들 수 없다
//	public abstract void printName();
//	public abstract void todo();
	
//	public void todo() {
//		System.out.println("먹기");
//	};
	
	public Person(String name) {
		this.name = name;
	}
	 
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	
}
