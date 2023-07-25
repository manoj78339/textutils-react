import React ,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick=()=>{
        //console.log("uppercase was clicked:"+ text);
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to upper Case!" ,"success");
    }
      
        const handleLoClick=()=>{
            //console.log("lowercase was clicked:"+ text);
            let newText=text.toLowerCase();
            setText(newText)       
            props.showAlert("Converted to lower Case!" ,"success");
         }

         const handleClearClick=()=>{
            //console.log("lowercase was clicked:"+ text);
            let newText= "";
            setText(newText)
            props.showAlert("text cleared !" ,"success");
        
    }
    const handleOnChange=(event)=>{
        //console.log("onChange");
       
        setText(event.target.value);
      
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard!" ,"success");
    }

    const handleExtraSpaces = () => {
        let newText =text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces Removed !" ,"success");
    }
    
    
    const [text,setText] = useState('');
    //text="new text" ; //wrong way to change the state
    //set text("new text");//correct way to change the state
    
    return (
        <>   
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}> 

            <h1>{props.heading}</h1>
<div className="mb-3">
  
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?
  '#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8" cols="120" ></textarea>
</div>
<button className="btn btn-primary mx-1 my-1"onClick={handleUpClick}>convert to uppercase</button>
<button className="btn btn-primary mx-1 my-1"onClick={handleLoClick}>convert to lowercase</button>
<button className="btn btn-primary mx-1 my-1"onClick={handleClearClick}>Clear Text</button>
<button className="btn btn-primary mx-1 my-1"onClick={handleCopy}>Copy text</button>
<button className="btn btn-primary mx-1 my-1"onClick={handleExtraSpaces}>remove Extra Spaces</button>


    
        </div>
       <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
           <h2>your text summary</h2>
           <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length }words and {text.length} character</p>
           <p>{0.008* text.split(" ").filter((element)=>{return element.length!==0}).length}minute to read</p>
           <h2>preview</h2>
           <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>

       </div>
       </>
     
      
    )
}
