import { useParams, useNavigate, useSearchParams } from 'react-router-dom';

const Sesac = () => {
    const { name } = useParams();
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    return (
        <div className="containers">
            <p>학생의 이름은 <span>{name}</span> 입니다</p>
            {searchParams != "" && <p>실제 이름은 <span className="name">{searchParams.get("name")}</span></p>}
            <button onClick={() => navigate(-1)}>이전페이지로</button>
        </div>
    )
}

export default Sesac;