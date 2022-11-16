package sesac.spring.study.sesacspringstudy.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import sesac.spring.study.sesacspringstudy.dto.FormDTO;
import sesac.spring.study.sesacspringstudy.vo.FormVO;

@Controller
public class form2Controller {

    // form2로 get 요청이 들어오면 form2.html를 렌더해준다.
    @GetMapping("form2")
    public String getForm() {
        return "form2";
    }

    // 동적 폼 전송은 RequestParam으로 값을 받아올 수 없다. -> 에러
    @PostMapping("form-param1")
    public String postForm1(@RequestParam String name, @RequestParam String gender, Model model) {
        model.addAttribute("name", name);
        model.addAttribute("gender", gender);
        return "result";
    }

    // 일반 폼 전송 - RequestParam
    @PostMapping("form-param2")
    public String postForm2(@RequestParam String name, @RequestParam String gender, Model model) {
        model.addAttribute("name", name);
        model.addAttribute("gender", gender);
        return "result";
    }

    // 동적 폼 전송 - DTO
    @PostMapping("form-dto1")
    @ResponseBody
    public FormDTO postDto1(@RequestBody FormDTO person, Model model) {
        model.addAttribute("name", person.getName());
        model.addAttribute("gender", person.getGender());
        return person;
    }

    // 일반 폼 전송 - DTO
    @PostMapping("form-dto2")
    public String postDto2(FormDTO person, Model model) {
        model.addAttribute("name", person.getName());
        model.addAttribute("gender", person.getGender());
        return "result";
    }

    // 동적 폼 전송 - VO
    @PostMapping("form-vo1")
    @ResponseBody
    public FormVO postVo1(@RequestBody FormVO person, Model model) {
        model.addAttribute("name", person.getName());
        model.addAttribute("gender", person.getGender());
        return person;
    }

    // 일반 폼 전송 - 세터 함수가 없기 때문에 VO를 사용할 수 없다
    @PostMapping("form-vo2")
    public String postVo2(FormVO person, Model model) {
        model.addAttribute("name", person.getName());
        model.addAttribute("gender", person.getGender());
        return "result";
    }
}
