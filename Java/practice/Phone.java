package practice;

public interface Phone {
	// public final 생략 가능
	public final String CATEGORY = "phone";
	public final String CATEGORY2 = "phone";
	
	// public abstract 생략 가능
	public abstract void sendCall();
	public abstract void receiveCall();
}
