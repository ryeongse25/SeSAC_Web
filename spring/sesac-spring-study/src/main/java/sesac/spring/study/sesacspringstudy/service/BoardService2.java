package sesac.spring.study.sesacspringstudy.service;
// 컨트롤러에 필요한 비지니스 로직을 구현한 곳

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import sesac.spring.study.sesacspringstudy.domain.Board;
import sesac.spring.study.sesacspringstudy.repository.JPARepository;
import sesac.spring.study.sesacspringstudy.repository.SDBoardRepository;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class BoardService2 {
    // private final JPARepository boardRepository;
    private final SDBoardRepository boardRepository;
    // boardRepository = new MemoryRepository();
    // boardRepository = newJPARepository();
    // 인지 모르기 때문에 정확하게 적어줘야 한다.

    public int write(Board board) {
        // 이름 중복 검사
        boardRepository.save(board);
        return board.getID();
    }

    public Optional<Board> findById(int id) {
        return boardRepository.findById(id);
    }

    public Optional<Board> findByName(String name) {
        return boardRepository.findByName(name);
    }

    public List<Board> findBoards() {
        return boardRepository.findAll();
    }
}
