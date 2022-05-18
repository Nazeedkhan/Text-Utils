import React, { useState } from 'react';

export default function TextForm(props) {
      const handleUpClick = () => {
            // console.log(text);
            let newText = text.toUpperCase();
            setText(newText);
            props.showAlert("Converted to Uppercase","success")
      }
      const handleLoClick = () => {
            // console.log(text);
            let newText = text.toLowerCase();
            setText(newText);
            props.showAlert("Converted to Lowercase","success")
      }
      const handleClearClick = () => {
            // console.log(text);
            let newText = ("");
            setText(newText);
            props.showAlert("Cleared!","success")
      }
      const handleCopy = () => {
            var text = document.getElementById('mybox');
            text.select();
            navigator.clipboard.writeText(text.value);
            props.showAlert("Copied to Clipboard!","success")
      }
      const handleExtraSpaces = () => {
            let newText = text.split(/[ ]+/);
            setText(newText.join(" "));
            props.showAlert("Extra spaces removed","success")
      }
      const handleOnChange = (event) => {
            setText(event.target.value);
      }
      const [text, setText] = useState('');
      // console.log('Enter text here 2');
      // setText("okay here");
      return (
            <>
                  <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                        <h2>{props.heading}</h2>
                        <div className="mb-3">
                              <textarea className="form-control" onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} value={text} id="mybox" placeholder='Enter your text here' rows="8"></textarea>
                              <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to uppercase</button>
                              <button className="btn btn-primary mx-2" onClick={handleLoClick} >Convert to lowercase</button>
                              <button className="btn btn-danger mx-2" onClick={handleClearClick} >Clear Box</button>
                              <button className="btn btn-danger mx-2" onClick={handleCopy} >Copy Text</button>
                              <button className="btn btn-danger mx-2" onClick={handleExtraSpaces} >Remove Extra Spaces</button>
                        </div>
                  </div>
                  <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                        <h2>Your Text Summary</h2>
                        <li>{text.split(" ").length} words and {text.length} characrters </li>
                        <li> {0.008 * (text.split(" ").length)} Minutes read</li>
                        <h2>Preview</h2>
                        <p>{text.length>0?text:"Enter something in the above box to see Preview"}</p>
                  </div>
            </>
      );
}

