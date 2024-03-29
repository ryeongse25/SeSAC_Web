package sesac.spring.study.sesacspringstudy.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import sesac.spring.study.sesacspringstudy.domain.Board;
import sesac.spring.study.sesacspringstudy.dto.BoardDTO;
import sesac.spring.study.sesacspringstudy.service.BoardService;
import sesac.spring.study.sesacspringstudy.service.BoardService2;

import java.util.List;
import java.util.Optional;

@Controller
@RequiredArgsConstructor
public class BoardController {
    private static BoardService boardService = new BoardService();
    private final BoardService2 boardService2;

    @GetMapping("board-write")
    public String getBoardWrite() {
        return "board-write";
    }

    @PostMapping("board-write")
    public String postBoardWrite(BoardDTO boardDTO) {
        // boardDTO = { name: 이름, content: 내용 }
        Board board = new Board();
        board.setName(boardDTO.getName());
        board.setContent(boardDTO.getContent());
        // board = { name: 이름, content: 내용, ID: x }
        boardService.write(board);
        // -> repository에 있는 map에 전달받은 name, content로 board 객체가 저장되었다.
        return "redirect:/board-view";
    }

    @GetMapping("board-view")
    public String getBoardView(Model model) {
        List<Board> result = boardService.findBoards();
        model.addAttribute("list", result);
        return "board-view";
    }

    @PostMapping("board-search")
    @ResponseBody
    public Optional<Board> postBoardSearch(@RequestBody BoardDTO boardDTO) {
        return boardService.findByName(boardDTO.getName());
    }

    @GetMapping("board-write2")
    public String getBoardWrite2() {
        return "board-write2";
    }

    @PostMapping("board-write2")
    public String postBoardWrite2(BoardDTO boardDTO) {
        // boardDTO = { name: 이름, content: 내용 }
        Board board = new Board();
        board.setName(boardDTO.getName());
        board.setContent(boardDTO.getContent());
        // board =
        boardService2.write(board);
        // -> repository에 있는 map에 전달받은 name, content로 board 객체가 저장되었다.
        return "redirect:/board-view2";
    }

    @GetMapping("board-view2")
    public String getBoardView2(Model model) {
        List<Board> result = boardService.findBoards();
        model.addAttribute("list", result);
        return "board-view2";
    }

    @PostMapping("board-search2")
    @ResponseBody
    public Optional<Board> postBoardSearch2(@RequestBody BoardDTO boardDTO) {
        return boardService2.findByName(boardDTO.getName());
    }
}
