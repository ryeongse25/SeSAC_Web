package sesac.crud.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import sesac.crud.domain.User;

public interface UserRepository extends JpaRepository<User, String> {

}
