import './Todo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

function TodoList(props){

    const {state} = props;
    // console.log(state)

    return (
        
        <ol>
            
            {
                state.map((item , index) =>{
                    return (

                        <div className='list-style'>
                           
                            <li className="list" key={index}>
                                {`${item}`}
                            </li>

                            <FontAwesomeIcon icon={faTrashCan} className="faTrashCan"/>

                        </div>
                    )
                    
                })
            }
        </ol>
    )
}

export default TodoList;