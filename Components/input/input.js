import React from 'react';
import './input.css'

const Input = (props) =>{
    return(
        <div>
            
        <form  onSubmit={props.submit}>
            <h1>Form</h1>
            <label className='Label' htmlFor="firstName" id="fn">FirstName</label>
            <div className='Inputs'>
                <input className="Input" type='text' id='firstName' name='firstName' placeholder="First Name"
                value={props.val.firstName}
                onChange={props.changed}
                onBlur={props.blur}></input>
                {props.error.firstName&&props.touched.firstName ? <p>{props.error.firstName}</p> : null}
            </div>
            
           
            <label className='Label' htmlFor="lastName">LastName</label> 
            <div className='Inputs'>
                <input className="Input" type='text' id='lastName' name='lastName'
                value={props.val.lastName}
                onChange={props.changed}
                onBlur={props.blur}></input>
                {props.error.lastName&&props.touched.lastName ? <p>{props.error.lastName}</p> : null}
            </div>

            <label className='Label' htmlFor="dateofbirth">DateOfBirth</label>
            <div className='Inputs'>
                <input className="Input" type='date' id='dateofbirth' name='dateofbirth'
                value={props.val.dateofbirth}
                onChange={props.changed}
                onBlur={props.blur}></input>
            </div>

            <label className='Label' htmlFor="placeofbirth">PlaceOfBirth</label>
            <div className='Inputs'>
                <input className="Input" type='text' id='placeofbirth' name='placeofbirth'
                value={props.val.placeofbirth}
                onChange={props.changed}
                onBlur={props.blur}></input>
                {props.error.placeofbirth&&props.touched.placeofbirth ? <p>{props.error.placeofbirth}</p> : null}
            </div>

            <label className='Label'>Address</label>
            <div className="address">
                <label  htmlFor='line1'>Line 1</label>
                <input className="addressinput" type='text' id='Line1' name='Line1'
                value={props.val.Line1}
                onChange={props.changed}
                onBlur={props.blur}></input><br/>
                {/* {props.error.Line1&&props.touched.Line1 ? <p>{props.error.Line1}</p> : null} */}
                <label  htmlFor='line2'>Line 2</label>
                <input className="addressinput" type='text' id='Line2' name='Line2'
                value={props.val.Line2}
                onChange={props.changed}
                onBlur={props.blur}></input>
            </div>
            {(props.error.Line2&&props.touched.Line2)||(props.error.Line1&&props.touched.Line1) ? <p className="addressp">{props.error.Line1}</p> : null}
           
            <label className='Label' htmlFor="phonenumber">Phone Number</label>
            <div className='Inputs'>
                <input className="Input" type='number' id ='phonenumber' name='phonenumber'
                value={props.val.phonenumber}
                onChange={props.changed}
                onBlur={props.blur}></input>
                {props.error.phonenumber&&props.touched.phonenumber?<p>{props.error.phonenumber}</p>:null}
            </div>
            
            <button style={{display:"block"}} type='submit'>Submit</button>
        </form>
    </div>
    )
}

export default Input;