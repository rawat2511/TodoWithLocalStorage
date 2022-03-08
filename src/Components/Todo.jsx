import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 } from 'uuid';
import { logoutUser } from '../Store/AuthReducer/action';
import { addTodo, deleteTodo, toggleStatus } from '../Store/TodoReducer/actions';

const Todo = () => {

    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);
    console.log(todos);
    const [item, setItem] = useState("");

    const handleAdd = () => {
        dispatch(addTodo({title: item, status: false, id: v4() }) );
        setItem("");
    }

  return (
    <div>
      <h1>Todos <button onClick={() => dispatch(logoutUser())}>Logout</button></h1>

      <br /><br />

      <input value={item} type="text" placeholder='Add Item To Todo' onChange={(e) => setItem(e.target.value)} />
      <button onClick={() => handleAdd() }>ADD</button>

      <br /><br />

      {
          todos && todos.map(({title, id, status}) => <div key={id}>
                <h1>{title}</h1>
                <button onClick={() => dispatch(toggleStatus(id) )}>{status.toString()}</button>
                <button onClick={() => dispatch(deleteTodo(id) )}>DELETE</button>
              </div>)
      }
      
    </div>
  )
}

export default Todo
