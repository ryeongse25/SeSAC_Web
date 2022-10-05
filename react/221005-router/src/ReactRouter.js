import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Main from './Main';
import Product from './Product';

const ReactRouter = () => {
    return (
        <div>
            {/* BrowserRouter는 URL이 바뀌었을 때 바꾸고 싶은 컴포넌트 최상단에 위치해야 한다. */}
            <BrowserRouter>
            <Link to="/">페이지</Link>
                <Routes>
                    <Route path="/" element={<Main />} />
                    {/* URL 파라미터 */}
                    <Route path="/product/:id" element={<Product />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default ReactRouter;