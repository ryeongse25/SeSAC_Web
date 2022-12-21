package sesac.mongodb.domain;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@Document(collection="User")
public class User {

    private String id;
    private int password;
}
