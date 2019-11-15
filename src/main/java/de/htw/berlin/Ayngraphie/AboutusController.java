package de.htw.berlin.Ayngraphie;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Date;

@Controller
public class AboutusController {

    @GetMapping("/aboutus")
    public String aboutus(@RequestParam(name="name", required=false, defaultValue="World") String name, Model model) {
        model.addAttribute("name", name);
        model.addAttribute("standardDate", new Date());
        return "aboutus";
    }

    @GetMapping("/")
    public String home() {
        return "hello";
    }

    @GetMapping("/admin")
    public String admin() {
        return "admin";
    }
}
