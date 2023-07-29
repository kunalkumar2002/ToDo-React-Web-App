import './Todo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

function TodoList(props){

    const {state , handleDelete} = props;
    // console.log(state)

    // const handleDelete = (index) => {
    //     console.log(index)
    //   };
    
      return (
        <ol>
          {state.map((item, index) => {
            return (
              <div className='list-style' key={index}>
                <li>{`${item}`}</li>
                <FontAwesomeIcon
                  icon={faTrashCan}
                  className="faTrashCan"
                  onClick={() => handleDelete(index)} // Pass the index to handleDelete function
                />
              </div>
            );
          })}
        </ol>
      );
}

export default TodoList;