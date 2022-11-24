package sesac.crud.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import sesac.crud.domain.User;
import sesac.crud.dto.UserDTO;
import sesac.crud.service.UserService;

import java.io.File;
import java.util.Optional;

@Controller
@RequiredArgsConstructor
@RequestMapping("user")
public class UserController {

    private final UserService userService;

    @GetMapping("/signup")
    public String signupPage() {
        return "signup";
    }

    @GetMapping("/login")
    public String loginPage() {
        return "login";
    }

    private String savePath = "/Users/user/Desktop/github/SeSAC_Web/spring/crud/src/main/resources/static/upload";

    @PostMapping("/postSignup")
    @ResponseBody
    public String postSignup(UserDTO userDTO) throws Exception {
        MultipartFile profile = userDTO.getProfile();

        if(!profile.isEmpty()) {
            String fileName = profile.getOriginalFilename();
            File saveFile = new File(savePath, fileName);
            profile.transferTo(saveFile);
        }

        User user = new User();
        user.setId(userDTO.getId());
        user.setName(userDTO.getName());
        user.setPassword(userDTO.getPassword());
        user.setProfile(profile.getOriginalFilename());

        userService.signup(user);
        return userDTO.getName() + "님 환영합니다.";
    }

    @PostMapping("/postLogin")
    @ResponseBody
    public String postLogin(@RequestBody UserDTO userDTO) {
        Optional result = userService.login(userDTO.getId(), userDTO.getPassword());
        if (result.isPresent()) return "로그인 성공";
        else return "로그인 실패";
    }

}
