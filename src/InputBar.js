import './InputBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'

function InputBar(props){

    const { state, handleInputKeyBord , handleClick , editTaskId} = props;

    return (
        <div className="screen">
            <input
                value={state}
                onKeyDown={handleInputKeyBord}
                onChange={handleInputKeyBord}
            />
            <button id="btn" onClick={handleClick}>
                {editTaskId ? <FontAwesomeIcon 
                        icon={faPenToSquare} 
                        className="faPen"
                        
                    /> : '+'}
            </button>
        </div>
    )
}

export default InputBar