import {useState} from 'react';
import InputStyle from './input.module.css';
import { ImCancelCircle } from "react-icons/im";


export  function InputData(){
    const [dataInput,setDataInput]=useState('');
    const [buttonData,setButtonData]=useState([]);

    function handleChanger(event){
        setDataInput(event.target.value);
    }
    function handleClick(){
        setButtonData(function(buttonData){
            const newList=[...buttonData,dataInput]
            console.log(newList);
            setDataInput('');
            return newList;
        })
    }
    function deleteTheValues(indexValue){
        const newData=buttonData.filter((element,identify)=>{
            return indexValue !== identify
        })
        setButtonData(newData);
    }
    return(
        <>
        <div className={InputStyle.input_main}>
            <input type="text" placeholder='Add a new task' value={dataInput} onChange={handleChanger}/>

        </div>
        <button className={InputStyle.btn1} onClick={handleClick}>Add Items</button>
        {buttonData !==[] && buttonData.map((renderData,indexValue)=>{
            return(
                <>
                <div className={InputStyle.main_area_after_map}>
                    <p key={indexValue}>
                        <h7 className={InputStyle.data_render_area}>{renderData}</h7>
                        <ImCancelCircle className={InputStyle.delete_button}
                        onClick={()=>deleteTheValues(indexValue)}/>
                    </p>
                </div>
                </>
            )
        })}
        </>
    )
}