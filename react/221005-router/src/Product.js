import { useParams, useLocation, useSearchParams, useNavigate } from 'react-router-dom';

function Product() {
    // const new_id = useParams().id => 새로운 이름으로 가져오기
    const { id } = useParams();
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    // navigate => 함수로 사용
    const navigate = useNavigate();
    return (
        <div>
            <h1>{id}번 Product</h1>

            <ul>
                {/* # */}
                <li>hash: {location.hash}</li>
                {/* 현재 경로 (쿼리 제외) */}
                <li>pathname: {location.pathname}</li>
                {/* 쿼리 스트링 (물음표 포함) */}
                <li>search: {location.search}</li>
                {/* 상태값 */}
                <li>state: {location.state}</li>
                {/* location 객체의 고유값 */}
                <li>key: {location.key}</li>
            </ul>

            <ul>
                <li>keyWords : {searchParams}</li>
                <li>keyWord : {searchParams.get("search")}</li>
            </ul>

            <ul>
                <li><button onClick={() => navigate(-2)}>Go 2 pages back</button></li>
                <li><button onClick={() => navigate(-1)}>Go back</button></li>
                <li><button onClick={() => navigate(1)}>Go forward</button></li>
                <li><button onClick={() => navigate(2)}>Go 2 pages forward</button></li>
                <li><button onClick={() => navigate('/')}>Go Root</button></li>
                {/* state값 전달 */}
                <li><button onClick={() => navigate('/', {state: 'a'})}>Go Root2</button></li>
            </ul>
        </div>
    )
}

export default Product;