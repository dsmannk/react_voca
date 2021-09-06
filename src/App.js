//import logo from './logo.svg';
import './App.css';
//import Hello from "./commponent/Hello";
//import Welcome2 from "./commponent/Welcome2";
//import styles from "./App.module.css";
import Header from "./commponent/Header";
import DayList from "./commponent/DayList";
import Day from "./commponent/Day";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import EmptyPage from "./commponent/EmptyPage";
import CreateWord from "./commponent/CreateWord";
import CreateDay from "./commponent/CreateDay";


/*
* 간단하게 json으로 테스트할수 있는 패키지
* npm install json-server
* 실행 : json-server --watch ./src/db/data.json --port 3001
* typescript 패키지 설치
* npm install typescript @types/node @types/react @types/react-dom @types/jest @types/react-router-dom
* */
function App() {
    return (
        <BrowserRouter>
        <div className="App">
            <Header />
            <Switch>
                <Route exact path="/">
                    <DayList/>
                </Route>
                <Route exact path="/day/:day">
                    <Day />
                </Route>
                <Route exact path="/create_word">
                    <CreateWord />
                </Route>
                <Route exact path="/create_day">
                    <CreateDay />
                </Route>
                <Route>
                    <EmptyPage />
                </Route>
            </Switch>
            {/*<Hello/>*/}
            {/*<div className={styles.box}>App</div>*/}
            {/*<Welcome2/>*/}
            {/*<Header/>*/}
        </div>
        </BrowserRouter>
    );
}

export default App;
