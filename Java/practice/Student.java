package practice;

public abstract class Student {
	private String name;
	private String school;
	private int age;
	private int number;
	
	public Student(String name, String school, int age, int number) {
		this.name = name;
		this.school = school;
		this.age = age;
		this.number = number;
	}
	
	public abstract void todo();
}
