// const Hello = () => {
//     <p>Hello</p>
// };
// export default Hello;

import World from "./World";
import styles from "./Hello.module.css";

export default function Hello() {
    function showAge(age) {
        console.log(age);
    }

    function showName() {
        console.log("Mike");
    }

    function showText(txt) {
        console.log(txt);
    }
    return (
        <>
            <h1 style={ // style 적용시 객체로 작성(특별한 경우가 아니면 이렇게 인라인으로 작성하지 않는다- 보통 css파일로 작성)
                {
                    color : '#f00', // 객체이기 때문에 쉼표(,)로 구분해준다.
                    borderRight : '2px solid #000', // 대쉬를 쓰지말고 카멜케이스로 작성해준다. 속성값도 문자열이이면 싱글쿼터로 감싸줘야함다.
                    marginBottom : '30px',
                    opacity: 1,
                }
            }
            >Hello</h1>
            <World />
            <div className={styles.box}>Hello</div>
            <button onClick={showName}>show name</button>
            <button onClick={() => { // 장점 매개변수를 전달하기 편하다.
                showAge(10);
            }}>show age</button>
            <input type="text" onChange={e => {
                const txt = e.target.value;
                showText(txt);
            }}/>
        </>
    );
}