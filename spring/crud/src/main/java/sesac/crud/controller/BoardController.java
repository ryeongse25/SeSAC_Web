package sesac.crud.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import sesac.crud.domain.Board;
import sesac.crud.dto.BoardDTO;
import sesac.crud.service.BoardService;

import java.util.List;

@Controller
@RequiredArgsConstructor
public class BoardController {

    private final BoardService boardService;

    @GetMapping("/")
    public String getBoard(Model model) {
        List<Board> result = boardService.view();
        model.addAttribute("list", result);
        return "index";
    }

    @PostMapping("/write")
    @ResponseBody
    public Board postWrite(@RequestBody BoardDTO boardDTO) {
        Board board = new Board();
        board.setName(boardDTO.getName());
        board.setContent(boardDTO.getContent());
        boardService.write(board);
        return board;
    }

    @DeleteMapping("/delete/{id}")
    @ResponseBody
    public String deleteComment(@PathVariable int id) {
        System.out.println("-----------------------------");
        boardService.delete(id);
        return "삭제 완료";
    }

    @PutMapping("/edit")
    @ResponseBody
    public String editComment(@RequestBody BoardDTO boardDTO) {
        Board board = new Board();
        board.setID(boardDTO.getId());
        board.setName(boardDTO.getName());
        board.setContent(boardDTO.getContent());
        boardService.write(board);
        return "수정 완료";
    }
}
