package sesac.crud.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import sesac.crud.domain.User;
import sesac.crud.dto.UserDTO;
import sesac.crud.service.UserService;

@Controller
@RequiredArgsConstructor
@RequestMapping("user")
public class UserController {

    private final UserService userService;

    @GetMapping("/signup")
    public String signupPage() {
        return "signup";
    }

    @PostMapping("/postSignup")
    @ResponseBody
    public String postSignup(@RequestBody UserDTO userDTO) {
        User user = new User();
        user.setId(userDTO.getId());
        user.setName(userDTO.getName());
        user.setPassword(user.getPassword());
        user.setProfile(user.getProfile());
        return "회원가입 완료";
    }

}
