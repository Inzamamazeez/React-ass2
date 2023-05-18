import React from "react"

export default function SubmitButton({onclick}){
    return(
        <div className="design1">
            <button style={{background:"red"}} onClick={onclick}>Submit</button>
        </div>
    )
}