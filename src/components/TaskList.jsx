import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';

const TaskList = () => {
    const todos = useSelector(state => state.todos);
    //update State
    const dispatch = useDispatch();

    const deleteTodoItem = (task) => ({
        type: "DELETE_TODO",
        payload: task
    })
    
    return ( 
        <>
            <ul class="mt-3 list-unstyled"> 
                {todos.map((item, index) => { 
                    return (
                        <li key={index} class="form-control d-flex justify-content-between p-2"> 
                            {item} 
                            <button onClick={() => dispatch(deleteTodoItem(item))} aria-label={`Delete Task: ${item}`} class='btn btn-danger btn-sm ms-2'> Delete </button>
                        </li>
                    )
                })}
            </ul> 
        </>
    )
}


export default TaskList