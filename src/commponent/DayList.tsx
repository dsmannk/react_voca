import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";

export interface IDay {
    id: number,
    day: number,
}

export default function DayList() {
    const days: IDay[] = useFetch("http://localhost:3001/days");
    // const [days, setDays] = useState( [] );
    //
    // useEffect(() => {
    //     // api 비동기 통신을 위해 fetch를 이용
    //     fetch('http://localhost:3001/days')
    //         .then(res => {
    //             return res.json();
    //         })
    //         .then(data => {
    //             setDays(data);
    //         });
    // }, []); // count 의존성 배열이 변경된 경우에만 카운트가 실행된다.
    // // 의존성 배열을 빈배열로 처리시 최초에 한번만 호출된다.

    if(days.length === 0) {
        return <span>loading...</span>;
    }

    return (
        <ul className="list_day">
            {days.map(day => (
                <li key={day.id}>
                    <Link to={`/day/${day.day}`}>
                    Day {day.day}
                    </Link>
                </li>
            ))}
        </ul>
    );
}
