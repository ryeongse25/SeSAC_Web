package sesac.crud.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import sesac.crud.dto.FileDTO;

import java.io.File;

@Controller
public class FileController {

    @GetMapping("/file")
    public String uploadFile() {
        return "fileupload";
    }

    private String savePath = "/Users/user/Desktop/github/SeSAC_Web/spring/crud/src/main/resources/static/upload";

    @PostMapping("/file")
    public String postUpload(@RequestParam MultipartFile uploadFile) throws Exception {
        // System.out.println(uploadFile);
        // System.out.println(uploadFile.getOriginalFilename());
        if (!uploadFile.isEmpty()) {
            String uploadFileName = uploadFile.getOriginalFilename();
            File saveFile = new File(savePath, uploadFileName);
            uploadFile.transferTo(saveFile);
            // System.out.println(saveFile.getAbsoluteFile());
            // System.out.println(saveFile.getPath());
            return "redirect:/file";
        }
        return "redirect:/file2";
    }

    @PostMapping("/axiosFile")
    @ResponseBody
    public String axiosUpload(FileDTO fileDTO) throws Exception {
        System.out.println(fileDTO.getUploadFile2());
        MultipartFile file = fileDTO.getUploadFile2();

        if (!file.isEmpty()) {
            String uploadFileName = file.getOriginalFilename();
            File saveFile = new File(savePath, uploadFileName);
            file.transferTo(saveFile);
            return "업로드 완료";
        }
        return "파일 없음";
    }
}
