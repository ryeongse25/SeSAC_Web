package sesac.mongodb.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import sesac.mongodb.domain.User;
import sesac.mongodb.repository.UserRepository;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public List<User> findUsers() {
        return userRepository.findAll();
    }

    public Optional login(String id, int password) {
        return userRepository.findByIdAndPassword(id, password);
    }
}
