package sesac.spring.study.sesacspringstudy.service;
// 컨트롤러에 필요한 비지니스 로직을 구현한 곳

import sesac.spring.study.sesacspringstudy.domain.Board;
import sesac.spring.study.sesacspringstudy.repository.BoardRepository;
import sesac.spring.study.sesacspringstudy.repository.MemoryRepository;

import java.util.List;
import java.util.Optional;

public class BoardService {
    // const
    private final BoardRepository memoryRepository = new MemoryRepository();

    public void write(Board board) {
        memoryRepository.save(board);
        // return board.getID();
    }

    public Optional<Board> findById(int id) {
        return memoryRepository.findById(id);
    }

    public Optional<Board> findByName(String name) {
        return memoryRepository.findByName(name);
    }

    public List<Board> findBoards() {
        return memoryRepository.findAll();
    }
}
