import './Todo.css'

function TodoList(props){

    const {state} = props;
    // console.log(state)

    return (
        
        <ol>
            
            {
                state.map((item , index) =>{
                    return (

                        <div className='list-style'>
                            <img src="icons8-trash-can-50.png" alt='delete'  />
                            <li className="list" key={index}>
                                {`${item}`}
                            </li>
                        </div>
                    )
                    
                })
            }
        </ol>
    )
}

export default TodoList;