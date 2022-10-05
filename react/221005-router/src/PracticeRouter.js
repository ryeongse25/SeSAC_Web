import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PracticeMain from './PracticeMain';
import Sesac from './Sesac';

const ReactRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PracticeMain />} />
                    <Route path="/student/:name" element={<Sesac />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default ReactRouter;