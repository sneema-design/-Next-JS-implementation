"use client"

import { useState } from "react"

export default function counter() {
    const  [count,setCount] = useState(0)
    return(
        <div>

            <button onClick={()=>(setCount(count+1))}>
            +
        </button>
        {count}
        </div>
        
       
    )
};
