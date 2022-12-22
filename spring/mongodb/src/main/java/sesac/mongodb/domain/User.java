package sesac.mongodb.domain;

import lombok.Getter;
import lombok.Setter;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@Document(collection="User")
public class User {

    private ObjectId id;
    private String u_id;
    private int password;
}
