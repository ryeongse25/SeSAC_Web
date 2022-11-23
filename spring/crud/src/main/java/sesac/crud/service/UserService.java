package sesac.crud.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import sesac.crud.domain.User;
import sesac.crud.repository.UserRepository;

import javax.transaction.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
public class UserService {

    private final UserRepository userRepository;

    public void signup(User user) {
        userRepository.save(user);
    }
}
