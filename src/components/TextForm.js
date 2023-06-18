import React, {useState} from "react";


function TextForm(props){

    const[text, setText] = useState("");

    function handleOnChange(event){
        setText(event.target.value)
    }

    function handleUpClick(){
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!", "success");
    }

    function handleLowClick(){
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!", "success");
    }

    function handleClear(){
        setText("");
        props.showAlert("Text Cleared!", "success");
    }

    function handleCopy(){
        navigator.clipboard.writeText(text);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to Clipboard!", "success");
    }

    function handleExtraSpaces(){
        let newText = text.split(/[  ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed Extra Spaces!", "success");
    }


    return(
        <div>
        <div className="container" style={{color:props.mode === "dark"? "white":"black"}}>
            <h1 className="my-1 mb-4" >{props.heading}</h1>
            <div className="mb-3"> 
            <textarea className="form-control" id="myTextBox" onChange={handleOnChange} style={{backgroundColor: props.mode === "dark"? "black":"white", color:props.mode === "dark"? "white":"black"}} value={text} rows="8" placeholder="Enter your text here."></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color:props.mode === "dark" ? "white":"black"}} >
            <h2>Your text summary</h2>
            <p> {text.split(" ").filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
            <h2>Preview</h2>
            <p>{text.length === 0 ? "Nothing To Preview." : text}</p>
        </div>
        </div>
    );
}

export default TextForm;