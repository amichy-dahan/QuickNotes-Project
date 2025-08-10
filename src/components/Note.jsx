
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


              <div className='note-update'>

            {
               name.updateDate !== ""? `Last update : ${name.updateDate}`: ""
            }   
            </div>  
        </>

    )
}

export default  Note