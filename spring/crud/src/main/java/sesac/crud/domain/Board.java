package sesac.crud.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name="board")
public class Board {

    @Id
    @GeneratedValue
    private int ID;

    @Column(length=20, nullable = false)
    private String name;

    // @Column으로 따로 속성을 지정하지 않을 경우 content varchar(255)로 만들어진다.
    private String content;
}
