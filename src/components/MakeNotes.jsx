
import { useState } from 'react'
import './MakeNotes.css'
import RenderNote from './RenderNote'



function MakeNotes() {

 const categories = {
        choose :"",
        Personal: '#FFD700',
        Work: '#87CEEB',
        Shopping: '#90EE90',
        Others: '#D3D3D3',
    };


    const [notes, setNotes] = useState({ nextIndex: 0 });
    const [textArea, setTextArea] = useState("");
    const [textTilte, setTitle] = useState("");

    const [selectedCategory, setSelectedCategory] = useState('');

    function AddNoteToArr() {

        let stringDate = makeDate()
        console.log(stringDate)
        let obj = { ...notes };
        obj[obj.nextIndex] = { text: textArea, date: stringDate, title: textTilte, updateDate: "" ,cat:selectedCategory}
        obj.nextIndex++;
        setNotes(obj)
        setTitle("")
        setTextArea("")
        setSelectedCategory('');
        console.log(notes)

    }
    function updateNoteToArr(notePic, inputUpdate, updateTitle) {
        let updateDate = makeDate()
        let obj = { ...notes };
        obj[notePic].text = inputUpdate
        obj[notePic].title = updateTitle
        obj[notePic].updateDate = updateDate
        setNotes(obj)
    }


    function DeleteNoteFromArr(indexToDelete) {
        let obj = { ...notes };
        delete obj[indexToDelete];
        setNotes(obj);
    }
     function handleCategoryChange(e) {
    setSelectedCategory(e.target.value);
  }

    function makeDate() {
        const now = new Date();
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const day = now.getDate();
        const month = months[now.getMonth()];
        const hours = now.getHours();
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const sec = now.getSeconds().toString().padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';
        const hour12 = hours % 12 || 12;
        const suffix = 'th';
        return `${month}${day} ${suffix} ${hour12}:${minutes}:${sec} ${ampm}`
    }

    return (

        <>
            <div className="newNote">
                <input className='title' placeholder='Title' type="text" value={textTilte} onChange={(e) => setTitle(e.target.value)} />
                <textarea className='area' value={textArea} onChange={(e) => setTextArea(e.target.value)}>
                </textarea>
                <button onClick={AddNoteToArr} className='btn-Add'>Add</button>
                <select value={selectedCategory} onChange={handleCategoryChange}>
                    {Object.keys(categories).map(cat => (
                        <option key={cat} value={cat}>
                            {cat}
                        </option>
                    ))}
                </select>

            </div>
            <RenderNote obj={notes} onDelete={DeleteNoteFromArr} onUpdate={updateNoteToArr} />
        </>

    )
}

export default MakeNotes