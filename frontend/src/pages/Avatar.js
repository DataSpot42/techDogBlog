
import { useState } from 'react';
import { useMemo } from 'react';

function Avatar() {
    


    let avatarArray = []
    for (let i=0; i<50; i++){
    avatarArray.push(`https://api.dicebear.com/7.x/bottts/png?seed=${i}`)}
    console.log(avatarArray)
    
    return (
        <div>
            <ul>{avatarArray.map((url,index) => <li key={url}> {index+1}:<img src={url} alt="Avatar"/> </li>)}</ul>
        </div>

    )   
   
}
export default Avatar



