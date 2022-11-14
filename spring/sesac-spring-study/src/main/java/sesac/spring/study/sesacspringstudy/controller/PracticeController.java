package sesac.spring.study.sesacspringstudy.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;

@Controller
public class PracticeController {

    ArrayList<Integer> years = new ArrayList<>();
    ArrayList<Integer> month = new ArrayList<>();
    ArrayList<Integer> days = new ArrayList<>();

    @GetMapping("form")
    public String getForm(Model model) {

        for(int i=1950; i<2023; i++) {
            years.add(i);
        }

        for(int i=1; i<13; i++) {
            month.add(i);
        }

        for(int i=1; i<32; i++) {
            days.add(i);
        }

        model.addAttribute("years", years);
        model.addAttribute("month", month);
        model.addAttribute("days", days);

        return "form";
    }

    // 안 돌아감!!
    @PostMapping("postForm")
    @ResponseBody
    public String postForm(@RequestParam String name, @RequestParam String sex, @RequestParam int year, @RequestParam int month, @RequestParam int day, @RequestParam String interest,  Model model) {
        model.addAttribute("name", name);
        model.addAttribute("sex", sex);
        model.addAttribute("year", year);
        model.addAttribute("month", month);
        model.addAttribute("day", day);
        model.addAttribute("interest", interest);
        return name + " 님 환영합니다.";
    }

}
