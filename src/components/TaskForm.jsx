//lets users add tasks, dispatching actions to update the state
import {useDispatch} from 'react-redux';
import {useState} from 'react';

const TaskForm = () => {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();
    
    const changeValue = (event) => {
        setInput(event.target.value);
    }

    const handleKeyPress = (event) => {
        if (event.key === "Enter") { 
            addTask();
        }
    }

    //could store in an action file
    const addTodoAction = (task) => ({
        type: "ADD_TODO",
        payload: task
    })

    const addTask = () => {
        if (input.trim()) { 
            dispatch(addTodoAction(input))
            console.log("Form Submmited Input:", input);
            setInput("");
        } else { 
            alert("Input cannot be empty!")
        }
    }

    return ( 
        <> 
            <input 
                type="text" 
                placeholder="Add a new task..."
                value={input}
                onChange={changeValue}
                onKeyDown={handleKeyPress}
            />
            <button onClick={addTask}> Add Task </button>
        </>
    )
}

export default TaskForm;