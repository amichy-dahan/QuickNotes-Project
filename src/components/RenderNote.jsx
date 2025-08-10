import './RenderNote.css';
import Note from './Note';

import { useState } from 'react';


function RenderNote(props) {
    const [opened, setOpened] = useState(false);
    const [inputUpdate, setInputUpdate] = useState("");
    const [titleUpdate, setTitleUpdate] = useState("");
    const [notePic, setNotePic] = useState(0)

    const categories = {
        Personal: '#FFD700',
        Work: '#87CEEB',
        Shopping: '#90EE90',
        Others: '#D3D3D3',
    };

    function ToDeleteNote(indexToDelete) {
        props.onDelete(indexToDelete);
    }

    function updateText(notePic, inputUpdate, updateTitle) {
        props.onUpdate(notePic, inputUpdate, updateTitle)
        closeModel()
    }


    function modelOpen(el) {
        setInputUpdate(props.obj[el].text);
        setTitleUpdate(props.obj[el].title);
        console.log(el)
        setNotePic(el);
        console.log(el)
        setOpened(true);
    }

    function closeModel() {
        setOpened(false);
        setInputUpdate("");
    }

    

    return (
        <>

            <div className='container'>
                {Object.keys(props.obj).length === 1 ? "" :
                    Object.keys(props.obj).filter(key => key !== "nextIndex").map((el) => (
                        
                        <div style={{backgroundColor:`${categories[props.obj[el].cat]}`}} className='parent-note'>
                            <div >
                                <p onClick={() => ToDeleteNote(el)} className='text'>X</p>
                                <p className='date-look'>{props.obj[el].date}</p>
                            </div>

                            <div onClick={() => modelOpen(el)} className='note-pos'>
                                <Note name={props.obj[el]} />
                            </div>
                        </div>

                    ))}
            </div>

            {opened && (

                <div className="overlay">
                    <div className="note-details">
                        <div className='parent-note-update'>
                            <p onClick={closeModel} className='text'>X</p>

                            <h3>Note Details</h3>
                            <div className='note-pos-update'>
                                <input onChange={(e) => setTitleUpdate(e.target.value)} value={titleUpdate} />
                                <input className='input-update' onChange={(e) => setInputUpdate(e.target.value)} value={inputUpdate} />
                                <button onClick={() => updateText(notePic, inputUpdate, titleUpdate)}>Update</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default RenderNote;
