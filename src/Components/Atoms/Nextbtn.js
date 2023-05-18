import React from "react"

export default function NextButton({onclick}){
    return(
        <div className="design">
            <button style={{background:"red"}} onClick={onclick} >Next</button>
        </div>
    )
}