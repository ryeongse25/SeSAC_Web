package sesac.crud.dto;

import lombok.Getter;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

@Getter
@Setter
public class UserDTO {
    private String id;
    private String name;
    private String password;
    private MultipartFile profile;
}
