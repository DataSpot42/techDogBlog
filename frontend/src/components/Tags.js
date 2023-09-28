import './tags.css'
import { useState, useEffect } from 'react'

function Tags() {
    const [tag, setTag] = useState([])
    const [tagSave, setTagSave] = useState([]);
    useEffect(() => {
        console.log(tagSave)
        localStorage.setItem('tagSave', JSON.stringify(tagSave));
    }, [tagSave]);

    function handleKeydown(e) {
        if (e.key !== 'Enter') return
        const value = e.target.value
        if (!value.trim()) return
        setTag([...tag, value])
        console.log(tag)
        setTagSave(tag)
        
        // Clear the input
        e.target.value = ''
    }
    function removeTag(index) {
        setTag(tag.filter((e, i) => i !== index))
    }
    return (


        <div className="tags-input-container">
            {tag.map((input, index) => (
                <div className="tag-item" key={index}>
                    <span className="text">{input}</span>
                    <span className="close" onClick={() => removeTag(index)}>&times;</span>
                </div>

            ))}
            


            <input onKeyDown={handleKeydown} type="text" className="tags-input" placeholder="Add Tags to Your Blog..." />
  </div>

    );
}

export default Tags

