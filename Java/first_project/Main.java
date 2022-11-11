package first_project;

public class Main {

	public static void main(String[] args) {
		
		Student stu = new Student(20, "코딩온");
		stu.setSchool("코딩온 대학교");
		stu.setAge(21);
		
		System.out.println(stu.getAge());
		System.out.println(stu.getSchool());
		
		
	}

}