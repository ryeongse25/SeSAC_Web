package sesac.crud.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;

@Controller
public class FileController {

    @GetMapping("/file")
    public String uploadFile() {
        return "fileupload";
    }

    @PostMapping("/file")
    public void postUpload(MultipartFile[] uploadFile) {

        String uploadFolder = "/Users/user/Desktop/github/SeSAC_Web/spring/crud/src/main/resources/static/upload";
        for (MultipartFile multipartFile : uploadFile) {
            String uploadFileName = multipartFile.getOriginalFilename();
            File saveFile = new File(uploadFolder, uploadFileName);

            try {
                multipartFile.transferTo(saveFile);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }
}
