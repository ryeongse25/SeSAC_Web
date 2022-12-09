import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState, TDates } from '../type/Type';

export default function DateList() {
    const dates: TDates[] = useSelector((state: RootState) => state.dates);
    
    if (dates.length === 0) {
        return <span>Loading...</span>;
    }

    return (
        <ul className="list_date">
        {dates.map((date: TDates) => (
            <li key={date.id}>
            <Link to={`/date/${date.date}`}>{date.date}</Link>
            </li>
        ))}
        </ul>
    );
}
