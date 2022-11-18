package sesac.spring.study.sesacspringstudy.repository;
// 데이터베이스에 접근하고, 도메인 객체를 DB에 저장하고 관리하는 곳

import sesac.spring.study.sesacspringstudy.domain.Board;
import java.util.List;
import java.util.Optional;

public interface BoardRepository {
     // save 라는 함수는 Board 클래스로 선언된 객체를 인자로 받고 Board 클래스의 객체를 return 한다.
     Board save(Board board);
     // Optional : Optional 에 감싸져서 오기 때문에 null값이 들어와도 오류가 나지 않는다. 오류를 따로 확인하는 함수도 존재
     Optional<Board> findById(int id);
     Optional<Board> findByName(String name);
     List<Board> findAll();
}
