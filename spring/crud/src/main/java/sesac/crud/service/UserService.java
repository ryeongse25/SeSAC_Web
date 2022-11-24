package sesac.crud.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import sesac.crud.domain.User;
import sesac.crud.repository.UserRepository;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class UserService {

    private final UserRepository userRepository;

    public void signup(User user) {
        userRepository.save(user);
    }

    public Optional login(String id, String password) {
        return userRepository.findByIdAndPassword(id, password);
    }
}
