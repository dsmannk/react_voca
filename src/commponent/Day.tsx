// 특정날짜를 클릭해서 들어갔을때 단어들이 나오는 페이지
import dummy from "../db/data.json";
import { useParams } from "react-router-dom";
import Word, {IWord} from "./Word";
import {useEffect, useState} from "react";
import useFetch from "../hooks/useFetch";

export default  function Day() {
    // dummy.words
    const { day } = useParams<{ day: string }>();
    const words : IWord[] = useFetch(`http://localhost:3001/words?day=${day}`);
    //const day = useParams().day;
    //const wordList = dummy.words.filter(word => word.day === Number(day));
    // const [words, setWords] = useState([]);
    //
    // useEffect(() => {
    //     fetch(`http://localhost:3001/words?day=${day}`)
    //         .then(res => {
    //             return res.json();
    //         })
    //         .then(data => {
    //             setWords(data);
    //         });
    // }, [day]); // 의존성 배열에 day를 넣음으로써 파라메터 day의 값은 최신값이라고 보장받을 수 있다.


    return (
        <>
            <h2>Day {day}</h2>
            {words.length === 0 && <span>loading...</span>}
            <table>
                <tbody>
                {words.map(word => (
                    <Word word={word} key={word.id} />
                ))}
                </tbody>
            </table>
        </>
    );
}