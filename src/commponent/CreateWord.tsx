import useFetch from "../hooks/useFetch";
import {useRef, useState} from "react";
import {useHistory} from "react-router-dom";
import {IDay} from "./DayList";

export default function CreateWord() {
    const days: IDay[] = useFetch("http://localhost:3001/days");
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);
    // (e: React.FormEvent) 은 외울수밖에 없음 인터넷을 찾아보면 다양한 정보를 얻을 수 있음.
    function onSubmit(e: React.FormEvent) {
        e.preventDefault();

        if(!isLoading
        && dayRef.current
        && engRef.current
        && korRef.current) {
            setIsLoading(true);

            const day = dayRef.current.value;
            const eng = engRef.current.value;
            const kor = korRef.current.value;

            fetch(`http://localhost:3001/words/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    day,
                    eng,
                    kor,
                    isDone: false,
                }),
            })
            .then(res => {
                if (res.ok) {
                    alert("생성이 완료 되었습니다.");
                    history.push(`/day/${day}`);
                }
            });
        }
    }

    // dom에 접근할 수 있게 해줌(scroll위치를 확인하거나 focus의 주거나 할 때 사용)
    // HTMLInputElement/HTMLSelectElement 타입을 등록하면 초기값이 null인 경우 처리
    const engRef = useRef<HTMLInputElement>(null);
    const korRef = useRef<HTMLInputElement>(null);
    const dayRef = useRef<HTMLSelectElement>(null);

    return(
        <form onSubmit={onSubmit}>
            <div className="input_area">
                <label>Eng</label>
                <input type="text" placeholder="computer" ref={engRef}/>
            </div>
            <div className="input_area">
                <label>Kor</label>
                <input type="text" placeholder="컴퓨터" ref={korRef}/>
            </div>
            <div className="input_area">
                <label>Day</label>
                <select ref={dayRef}>
                    {days.map(day => (
                        <option key={day.id} value={day.day}>{day.day}</option>
                    ))}
                </select>
            </div>
            <button style={{
                opacity: isLoading ? 0.3 : 1,
            }}>{isLoading ? "Saving..." : "저장"}</button>
        </form>
    );
}