import {InputData} from "../atoms/input";
import MainStyles from './MainPart.module.css';

export function ToDoList(){
    return(
        <>
        <div className={MainStyles.main_head}>
            <h1>To Do List:</h1>
        </div>
        <div className={MainStyles.container}>
            <InputData/>
        </div>
        </>
    )
}