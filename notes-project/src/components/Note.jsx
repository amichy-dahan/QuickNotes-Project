
import './RenderNote.css'
function Note({name}) {

    return (

        <>  
            <div className='note-title'>
             {name.title}
            </div>  
            <div className='note-text'>
             {name.text}
            </div>  
        </>

    )
}

export default  Note