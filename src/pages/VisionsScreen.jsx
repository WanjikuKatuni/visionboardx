// context of application


import React from 'react'
import {DragDropContext} from 'react-beautiful-dnd'

export default function VisionsScreen() {

    const [completed, setCompleted] = useState([])
    const [incomplete, setIncomplete] = useState([])

  return (
    <DragDropContext>
        <h2 style={{textAlign: "center"}}>PROGRESS VISION BOARD </h2>

        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
            {/* columns */}
        </div>
    </DragDropContext>
  )
}

