package sesac.mongodb.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import sesac.mongodb.repository.UserRepository;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public Optional login(String id, int password) {
        return userRepository.findByIdAndPassword(id, password);
    }
}
