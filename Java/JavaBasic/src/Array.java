import java.util.ArrayList;
import java.util.List;

public class Array {
	
	public void arrayPractice() {
		
		ArrayList<Integer> arrayList = new ArrayList<Integer>();
		ArrayList<Integer> arrayList2 = new ArrayList<>();
		
		arrayList.add(2);
		arrayList.add(3);
		arrayList.add(0, 1);
		
		arrayList2.add(10);
		arrayList2.add(20);
		arrayList2.add(30);
		
		arrayList.addAll(arrayList2);
		arrayList.remove(0);
		
		// 타입을 더 크게 지정할 수 있음
		// Person me = new Kim(); 이렇게
		// class ArrayList implements List 이런 관계
		
		List<Integer> list = arrayList.subList(1, 3);
		
		for (int value : arrayList) {
			System.out.println("arrayList : " + value);
		}
		
		for (int i=0; i<list.size(); i++) {
			System.out.println("List : " + list.get(i));
		}
	}
}
