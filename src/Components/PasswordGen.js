import { useState } from "react";

const PasswordGen = () => {

  const [outPut, setOutPut] = useState("");

  var lengthVar = 0;

  let upperCaseChecked = false;
  let lowerCaseChecked = false;
  let numberChecked = false;
  let symboleChecked = false;

  const passwordGenerator = () => {
    const upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
    const number = "0123456789";
    const symbole = "@#$%*&";
    let length = lengthVar;
    let finalChar = "";
    let password = "";

    if (upperCaseChecked === true) {
      finalChar = finalChar + upperCaseChar;
    }
    if (lowerCaseChecked === true) {
      finalChar = finalChar + lowerCaseChar;
    }
    if (numberChecked === true) {
      finalChar = finalChar + number;
    }
    if (symboleChecked === true) {
      finalChar = finalChar + symbole;
    }

    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * finalChar.length + 1);
      password = password + finalChar.charAt(index);
    }
    setOutPut(password);
  };

  return (
    
    <div className="container">
      <h1>Password Generator</h1>

      <div className="input_container">
      <input type="text" disabled value={outPut} id="in_text"/>
      <br />
      <span>Select Password length</span>
      <select
        onChange={(e) => {
          lengthVar = e.target.value;
        }} id="selectBox"
      >
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
      </select>
      <br />

      <input
        onClick={() => {
          upperCaseChecked =! upperCaseChecked;
        }}
        type="checkbox"
        id="uppercase"
        className="checkbox"
      />
      <label htmlFor="uppercase">Include uppercase letters</label>
      <br />

      <input
        onClick={() => {
          lowerCaseChecked = !lowerCaseChecked;
        }}
        type="checkbox"
        id="lowercase"
        className="checkbox"
      />
      <label htmlFor="lowercase">Include lowercase letters</label>
      <br />

      <input
        onClick={() => {
          numberChecked = !numberChecked;
        }}
        type="checkbox"
        id="number"
        className="checkbox"
      />
      <label htmlFor="number">Include numbers</label>
      <br />

      <input
        onClick={() => {
          symboleChecked = !symboleChecked;
        }}
        type="checkbox"
        id="symbole"
        className="checkbox"
      />
      <label htmlFor="symbole">Include symboles</label>
      <br />

      <button onClick={passwordGenerator}>Generate Password</button>
      </div>
    </div>
  );
};
export default PasswordGen;
