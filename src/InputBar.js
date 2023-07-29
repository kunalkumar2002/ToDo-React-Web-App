import './InputBar.css'

function InputBar(props){

    const {  handleInputKeyBord} = props;

    return (
        <div className="screen">
            <input
                // value={""}
                onKeyDown={handleInputKeyBord}
                onChange={handleInputKeyBord}
            />
            <button> + </button>
        </div>
    )
}

export default InputBar