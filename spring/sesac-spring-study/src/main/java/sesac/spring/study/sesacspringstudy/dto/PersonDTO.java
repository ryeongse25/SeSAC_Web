package sesac.spring.study.sesacspringstudy.dto;

import lombok.Getter;
import lombok.Setter;

// getter와 setter 함수를 사용할 수 있게 해준다.
@Getter
@Setter
public class PersonDTO {
    private String name;
    private int age;
}
