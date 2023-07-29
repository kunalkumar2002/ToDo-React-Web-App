import './InputBar.css'

function InputBar(props){

    const { state, handleInputKeyBord , handleClick} = props;

    return (
        <div className="screen">
            <input
                value={state}
                onKeyDown={handleInputKeyBord}
                onChange={handleInputKeyBord}
            />
            <button onClick={handleClick} id={'+'}> + </button>
        </div>
    )
}

export default InputBar