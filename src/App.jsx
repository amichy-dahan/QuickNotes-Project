import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import imge from './assets/line.jpg'
import './App.css'
import MakeNotes from './components/MakeNotes'

function App() {
  const [click, setClick] = useState(false)




  return (
    <>
      {
        !click ?
          <>
            <h1 >
              QuickNotes Project
            </h1>
            <br></br>
            <h1> Click Here to make notes</h1>
            <img src={imge} />
          
            <button onClick={() => setClick(true)} className='btn'>notes!</button>
          </>
          :
          <>
            <h1 >
              QuickNotes Project
            </h1>
            <br></br>

            <MakeNotes/>
            
          </>

      }



    </>
  )
}

export default App
