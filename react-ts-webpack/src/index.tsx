import React, {Fragment, useState} from "react";
import ReactDom from "react-dom";
// set type Form eleme
//settings a type requires an existing type
type FormElem=React.FormEvent<HTMLFormElement>

//creates a new type
interface ITodo {
    text: string
    complete: boolean
}

export default function App():JSX.Element{
    const [value, setValue]= useState<string>("")
    const[todos, setTodos] = useState<ITodo[]>([])
    
    const handleSubmit =( e:FormElem ):void =>{
        e.preventDefault()
        setValue('')
    }
// debugger
    return(
        <Fragment>
            <h1>Todo List</h1>
            <form onSubmit={handleSubmit}>
                <input type='text'value={value} onChange={e=>setValue(e.target.value)} required></input>
                <button type="submit">Add Todo</button>
            </form>
        </Fragment>
    )
}

const root = document.getElementById('app-root')

ReactDom.render(<App />, root)