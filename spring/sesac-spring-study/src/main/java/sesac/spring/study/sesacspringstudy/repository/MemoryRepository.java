package sesac.spring.study.sesacspringstudy.repository;

import sesac.spring.study.sesacspringstudy.domain.Board;
import java.util.*;

public class MemoryRepository implements BoardRepository {

    private static Map<Integer, Board> store = new HashMap<>();
    private static int id = 0;

    @Override
    public Board save(Board board) {
        // board 값은 이름과 내용이 적혀 온다.
        board.setID(++id);
        store.put(board.getID(), board);
        // {id : {name, content}
        return board; // 사실 없어도 됨
    }

    @Override
    public Optional<Board> findById(int id) {
        return Optional.ofNullable(store.get(id));
    }

    @Override
    public Optional<Board> findByName(String name) {
        return store.values().stream()
            .filter(board -> board.getName().equals(name)) // board의 이름이 내가 전달받은 이름과 같은 친구
            .findAny(); // stream에서 가장 먼저 탐색되논 요소를 Optional로 감싸서 return
    }

    @Override
    public List<Board> findAll() {
        // 찾는 코드
        ArrayList<Board> result = new ArrayList<>(store.values());
        // Map(store)에서 value들 (=값들을) 모두 찾고 ArrayList로 만든다.
        return result;
    }
}
