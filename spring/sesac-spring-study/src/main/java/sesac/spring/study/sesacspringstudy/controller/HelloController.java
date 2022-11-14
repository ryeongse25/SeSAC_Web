package sesac.spring.study.sesacspringstudy.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;

// 해당 클래스가 Controller 클래스라는 것을 알려준다
@Controller
public class HelloController {
    public class Person {

        private String name;
        private int age;

        public String getName() {
            return name;
        }

        public int getAge() {
            return age;
        }

        public void setName(String name) {
            this.name = name;
        }

        public void setAge(int age) {
            this.age = age;
        }
    }
    // hi url로 get 요청이 들어오면 아래 함수 실행
    @GetMapping("hi")
    public String getHi(Model model) {
        // hi.html로 text = "hihihi" 보내기
        model.addAttribute("text", "hihihi");
        model.addAttribute("utext", "<strong>utext</strong>");

        String[] names = {"kim", "lee", "park"};
        model.addAttribute("names", names);

        // practice 1
        model.addAttribute("age", 19);

        // resources - templates - hi.html 파일 불러오기
        return "hi";
    }

    @GetMapping("people")
    public String getPeople(Model model) {
        // practice 2
        ArrayList<Person> arrayList = new ArrayList<>();

        Person kim = new Person();
        kim.setName("김세령");
        kim.setAge(20);

        Person lee = new Person();
        lee.setName("이세령");
        lee.setAge(21);

        Person hong = new Person();
        hong.setName("홍세령");
        hong.setAge(22);

        Person park = new Person();
        park.setName("박세령");
        park.setAge(23);

        arrayList.add(kim);
        arrayList.add(lee);
        arrayList.add(hong);
        arrayList.add(park);

        model.addAttribute("arrayList", arrayList);

        return "people";
    }

    @GetMapping("api")
    // value : ? 뒤의 값, required=false ?name이 없어도 오류가 안 뜬다
    public String getApi(@RequestParam(value="name", required=false) String name, Model model) {
        model.addAttribute("name", name);
        return "api";
    }

    @GetMapping("api2/{name}")
    public String getApi2(@PathVariable String name, Model model) {
        model.addAttribute("name", name);
        return "api";
    }

    @GetMapping("introduce/{name}")
    public String getIntroduce(@PathVariable String name, Model model) {
        model.addAttribute("name", name);
        return "api";
    }

    @GetMapping("introduce2")
    public String getIntroduce2(@RequestParam String name, @RequestParam int age, Model model) {
        model.addAttribute("name", name);
        model.addAttribute("age", age);
        return "api";
    }



}
