package sesac.spring.study.sesacspringstudy.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

// 해당 클래스가 Controller 클래스라는 것을 알려준다
@Controller
public class HelloController {

    // hi url로 get 요청이 들어오면 아래 함수 실행
    @GetMapping("hi")
    public String getHi(Model model) {
        // hi.html로 text = "hihihi" 보내기
        model.addAttribute("text", "hihihi");
        // resources - templates - hi.html 파일 불러오기
        return "hi";
    }
}
