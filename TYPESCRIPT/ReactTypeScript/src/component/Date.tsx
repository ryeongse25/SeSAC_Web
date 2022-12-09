import React from 'react';
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Diary from "./Diary";
import { RootState, TDiary } from '../type/Type';

export default function Date() {
    const { date } = useParams();
    const allDiaries: TDiary[] = useSelector((state: RootState) => state.diaries);
    const diaries: TDiary[] = allDiaries.filter((diary) => diary.date == date );

    return (
        <>
        <h2>{date}</h2>
        {diaries.length === 0 && <span>Loading...</span>}
        <table>
            <tbody>
            {diaries.map((diary: TDiary) => (
                <Diary diary={diary} key={diary.id} />
            ))}
            </tbody>
        </table>
        </>
    );
}
