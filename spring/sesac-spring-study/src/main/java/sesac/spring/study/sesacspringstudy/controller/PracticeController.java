package sesac.spring.study.sesacspringstudy.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import sesac.spring.study.sesacspringstudy.dto.PracticeDTO;

import java.util.ArrayList;

@Controller
public class PracticeController {

//    ArrayList<Integer> years = new ArrayList<>();
//    ArrayList<Integer> month = new ArrayList<>();
//    ArrayList<Integer> days = new ArrayList<>();

    // "form"으로 get 요청이 왔을 때 form.html을 띄워준다.
    @GetMapping("form")
    public String getForm(Model model) {

//        for(int i=1950; i<2023; i++) { years.add(i); }
//        for(int i=1; i<13; i++) { month.add(i); }
//        for(int i=1; i<32; i++) { days.add(i); }

//        model.addAttribute("years", years);
//        model.addAttribute("month", month);
//        model.addAttribute("days", days);

        return "form";
    }

    // 일반 폼 전송 - DTO
    @PostMapping("postForm")
    public String postForm(PracticeDTO practiceDTO, Model model) {
        model.addAttribute("name", practiceDTO.getName());
        model.addAttribute("sex", practiceDTO.getSex());
        model.addAttribute("year", practiceDTO.getYear());
        model.addAttribute("month", practiceDTO.getMonth());
        model.addAttribute("day", practiceDTO.getDay());
        model.addAttribute("interest", practiceDTO.getInterest());
        return "result";
    }

    // 동적 폼 전송 - DTO
    @PostMapping("axiosForm")
    @ResponseBody // 를 쓰면 return이 res.send 처럼 동작한다
    public String axiosForm(@RequestBody PracticeDTO practiceDTO, Model model) {
        model.addAttribute("name", practiceDTO.getName());
        model.addAttribute("sex", practiceDTO.getSex());
        model.addAttribute("year", practiceDTO.getYear());
        model.addAttribute("month", practiceDTO.getMonth());
        model.addAttribute("day", practiceDTO.getDay());
        model.addAttribute("interest", practiceDTO.getInterest());
        return practiceDTO.getName() + "님 환영합니다!";
    }

}
