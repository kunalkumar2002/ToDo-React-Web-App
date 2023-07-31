import './Todo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan , faPenToSquare } from '@fortawesome/free-solid-svg-icons'

function TodoList(props){

    const {state , handleDelete , handleEditTask } = props;
    // console.log(state)

    // const handleDelete = (index) => {
    //     console.log(index)
    //   };
    
      return (
        <ol>
          {state.map((item, index) => {
            return (
              <div className='list-style' key={index}>
                <li>{`${item.title}`}</li>

               <div>
                    <FontAwesomeIcon 
                        icon={faPenToSquare} 
                        className="faPenToSquare"
                        onClick={() => handleEditTask(item.id)} 
                    />

                    <FontAwesomeIcon
                    icon={faTrashCan}
                    className="faTrashCan"
                    onClick={() => handleDelete(index)} // Pass the index to handleDelete function
                    />
                </div>
              </div>
            );
          })}
        </ol>
      );
}

export default TodoList;