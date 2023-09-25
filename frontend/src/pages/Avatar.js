
import { useState } from 'react';
import { useMemo } from 'react';

function Avatar({avatarHandler}) {
    

    let avatarChosen=""
    let avatarArray = []
    for (let i=0; i<15; i++){
    avatarArray.push(`https://api.dicebear.com/7.x/bottts/png?seed=${i}`)}
    
    
    return (
        <div>
            <ul>{avatarArray.map((url,index) => <li key={url}> {<button className = "avatar"onClick={(e) => avatarHandler(url)}><img src={url} alt="Avatar"/> </button>} </li>)}</ul>
        </div>

    )   
   
}
export default Avatar



