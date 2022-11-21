package sesac.spring.study.sesacspringstudy.repository;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import sesac.spring.study.sesacspringstudy.domain.Board;

import javax.persistence.EntityManager;
import java.util.List;
import java.util.Optional;

@Repository // JPA를 사용할 때는 레파지토리라고 알려줘야 한다. 그래야 EntityManager를 보내줌
@RequiredArgsConstructor // constructor를 자동으로 만들어준다 final로 써져있는 거를 parameter로 받는다
public class JPARepository implements BoardRepository{

    private final EntityManager em;

    @Override
    public Board save(Board board) {
        this.em.persist(board);
        return board;
    }

    @Override
    public Optional<Board> findById(int id) {
        return Optional.empty();
    }

    @Override
    public Optional<Board> findByName(String name) {
        return Optional.empty();
    }

    @Override
    public List<Board> findAll() {
        // Select * from board as b;
        return em.createQuery("select b from Board b", Board.class).getResultList();
    }
}
