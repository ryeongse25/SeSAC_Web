package sesac.mongodb.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import sesac.mongodb.dto.UserDTO;
import sesac.mongodb.service.UserService;

import java.util.Optional;

@Controller
@RequiredArgsConstructor
@RequestMapping("user")
public class UserController {

    private final UserService userService;

    @GetMapping("/login")
    public String loginPage() {
        return "login";
    }

    @PostMapping("/login")
    @ResponseBody
    public Optional login(@RequestBody UserDTO userDTO) {
        Optional login_result = userService.login(userDTO.getId(), userDTO.getPassword());
        return login_result;
    }
}
