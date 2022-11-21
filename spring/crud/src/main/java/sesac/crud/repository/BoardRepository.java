package sesac.crud.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import sesac.crud.domain.Board;

// JpaRepository<domain, pk type>
public interface BoardRepository extends JpaRepository<Board, Integer> {

}
