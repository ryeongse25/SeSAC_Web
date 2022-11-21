package sesac.crud.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import sesac.crud.domain.Board;
import sesac.crud.repository.BoardRepository;

import javax.transaction.Transactional;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class BoardService {

    private final BoardRepository boardRepository;

    public void write(Board board) {
        boardRepository.save(board);
    }

    public List<Board> view() {
        return boardRepository.findAll();
    }

    public void delete(int id) {
        boardRepository.deleteById(id);
    }
}
