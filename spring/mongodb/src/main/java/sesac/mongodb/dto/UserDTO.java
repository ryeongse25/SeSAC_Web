package sesac.mongodb.dto;

import lombok.Getter;
import lombok.Setter;
import org.bson.types.ObjectId;

@Getter
@Setter
public class UserDTO {
    private ObjectId id;
    private String u_id;
    private int password;
}
