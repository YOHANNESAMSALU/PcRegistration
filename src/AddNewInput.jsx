function AddNewInput({lable,value, onChange}) {
return(
 <>
 <label >{lable}:</label>
 <input className="new-input"
  type="text"
    value={value}
    onChange={onChange}
 ></input>
 </>
);
}
export default AddNewInput;