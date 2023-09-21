import React, {useState} from 'react'


function TextArea(props) {
    const [text, setText] = useState("");
    
    const clickToUp = () =>{
        setText(text.toUpperCase());
    }

    const clickToLow = () =>{
        setText(text.toLowerCase())
    }
    
    const clickToRemoveSpace = () => {
        setText(text.split(/ [ ] + /).join(" "));
    }

    const clickToCopy = () =>{
        const text = document.querySelector("#mytext");
        let btn = document.querySelector(".btn.copy");
        
        text.select()
        navigator.clipboard.writeText(text.value)
        
        btn.innerHTML="✔ Copied";
        setTimeout(()=>{btn.innerHTML="Copy";}, 1000)
    }
    const clickToClr = () =>{
        setText("");
    }
    const onChangeFunc = (event) =>{
        setText(event.target.value)
    }
    const clickToDown = () =>{
        setText(text);
        const file = new File([text],'text.txt',{type: 'text/plain'});
        const url = URL.createObjectURL(file)
        const a = document.createElement('a');
        a.href = url
        a.download = 'text.txt'
        a.click()
    }

    return (
    <>
    <h2 className={`text-center my-3 text-${props.mode === 'dark'?'light':'dark'}`}>Welcome to Text Modifier!</h2>
    <div className='container my-3'>
          <div className="form-group">
    <textarea className={`form-control bg-${props.mode === 'light'?'light':'dark'} text-${props.mode === 'dark'?'light':'dark'}`} id="mytext" rows="20" value={text} onChange={onChangeFunc}></textarea>
  </div>
  <button className="btn btn-success m-1" onClick={clickToUp} disabled={text.length === 0}>Uppercase</button>
  <button className="btn btn-success m-1" onClick={clickToLow} disabled={text.length === 0}>Lowercase</button>
  <button className="btn btn-success m-1" onClick={clickToRemoveSpace} disabled={text.length === 0}>Remove Extra Space</button>
  <button className="btn btn-success m-1 download" onClick={clickToDown} disabled={text.length === 0}>Download</button> 
  <button className="btn btn-success m-1 copy" onClick={clickToCopy} disabled={text.length === 0}>Copy</button>
  <button className="btn btn-success m-1" onClick={clickToClr} disabled={text.length === 0}>Clear</button>
    </div>
    <div className={`container bg-${props.mode === 'light'?'light':'dark'} text-${props.mode === 'light'?'dark':'light'} my-3 p-3`}>
    <p>Words: {text.split(" ").filter((element)=>element.length!==0).length}</p>
    <p>Characters: {text.length}</p>
     <p>{Math.round(text.split(" ").filter((element)=>element.length!==0).length * 0.08)} Minutes Read</p>
    </div>
    </>
  )
}

export default TextArea
