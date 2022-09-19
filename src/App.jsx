import { DragDropContext,Droppable } from 'react-beautiful-dnd';
import './App.css'

function App() {
  let blogs= [
    {
      "title": "My first Bolg",
      "body": "Create a beautiful blog that fits your style. Choose from a selection of easy-to-use templates – all with flexible layouts and hundreds of background images – or design something new.",
      "author": "mario",
      "id": "1"
    },
    {
      "title": "Opening Party",
      "body": "Create a beautiful blog that fits your style. Choose from a selection of easy-to-use templates – all with flexible layouts and hundreds of background images – or design something new.",
      "author": "lenin",
      "id": "2"
    },
  ]

  return (
    <div className="App">
  <DragDropContext>
  <Droppable droppableId="characters">
    {(provided) => (
      <ul className="characters">
       <li>1</li>
       <li>2</li>
       <li>3</li>
      </ul>
    )}
  </Droppable>
</DragDropContext>
    </div>
  )
}

export default App
