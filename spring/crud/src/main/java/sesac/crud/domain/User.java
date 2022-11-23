package sesac.crud.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Getter
@Setter
@Entity
@Table(name="user")
public class User {

    @Id
    private String id;

    private String name;
    private String password;
    private String profile;
}
