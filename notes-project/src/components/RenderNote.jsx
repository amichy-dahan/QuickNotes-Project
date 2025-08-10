import './RenderNote.css';
import Note from './Note';

import { useState } from 'react';

function RenderNote(props) {
    const [opened, setOpened] = useState(false);
    const [inputUpdate, setInputUpdate] = useState("");
    const [notePic, setNotePic] = useState(0)

    function ToDeleteNote(indexToDelete) {
        props.onDelete(indexToDelete);
    }

    function updateText(notePic, inputUpdate) {
        props.onUpdate(notePic, inputUpdate)
        closeModel()
    }

    function modelOpen(el) {
        setInputUpdate(props.obj[el].text);
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
                        <div className='parent-note'>
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
                                <input className='input-update' onChange={(e) => setInputUpdate(e.target.value)} value={inputUpdate} />
                                <button onClick={() => updateText(notePic, inputUpdate)}>Update</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default RenderNote;
