package dev.mvc.notice;

import java.io.FileReader;
import java.util.Map;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class NoticePageCont {

  @GetMapping("/notice/page")
  public String reactNoticePage(Model model) {
      // ✅ Vite 빌드 결과물의 JS/CSS 경로를 직접 지정
      model.addAttribute("reactJsPath", "/notice/assets/index.js");
      model.addAttribute("reactCssPath", "/notice/assets/index.css");
      return "notice/page";  // templates/notice/page.html
  }
  

}
