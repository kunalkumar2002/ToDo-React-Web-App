import './Todo.css'

function TodoList(props){

    const {state} = props;
    // console.log(state)

    return (
        
        <ul>
            
            {
                state.map((item , index) =>{
                    return (
                        <li className="list" key={index}>
                            {`${item}`}
                        </li>
                    )
                    
                })
            }
        </ul>
    )
}

export default TodoList;