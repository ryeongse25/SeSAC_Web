package first_project;

public class Student extends Person {
	
	private String school;
	
	public Student(int age, String name) {
		// 슈퍼 클래스의 생성자가 매개변수를 받지 않으면 생략 가능
		// 이름을 매개변수로 받을 경우 super(매개변수)으로 보내준다
		// 이 경우 세터가 필요없다
		// 무조건 첫 줄에 적어줘야 한다
		super(name);
		setAge(age);
		setName(name);
	}
	
	public void todo() {
		// Person에서 선언된 햠수 실행
		// super.todo();
		System.out.println("공부하기");
	}
	
	public void printName() {
		System.out.println(getName());
	};

	public String getSchool() {
		return school;
	}

	public void setSchool(String school) {
		this.school = school;
	}
	
	
}
