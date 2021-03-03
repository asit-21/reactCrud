import React from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import Input from '../input/input'
import './form.css';

const Form = (props) =>{
    
    let initialValue = null
    if(props.toEdit!=null){
        // console.log(props.toEdit)
        initialValue={
            firstName: props.toEdit.firstName,
            lastName: props.toEdit.lastName,
            dateofbirth: props.toEdit.dateofbirth,
            Line1: props.toEdit.Line1,
            Line2: props.toEdit.Line2,
            placeofbirth: props.toEdit.placeofbirth,
            phonenumber: props.toEdit.phonenumber
        };
    }else{
        initialValue={
            firstName:'',
            lastName:'',
            dateofbirth: '',
            Line1: '',
            Line2:'',
            placeofbirth:'',
            phonenumber: ''
        }
    }
    
    const formik = useFormik({
        
        initialValues:initialValue,
        validationSchema: Yup.object({
            firstName: Yup.string()
            .min(2,'First Name is too short! Please enter at least 2 characters.')
            .required('First Name is required!'),
            lastName: Yup.string()
            .min(2,'Last Name is too short! Please enter at least 2 characters.')
            .required('Last Name is required!'),
            Line1:  Yup.string()
            .min(5,'Address is too short! Please enter at least 5 characters.')
            .required('Address is required!'),
            Line2: Yup.string()
            .min(5,'Address is too short! Please enter at least 5 characters.')
            .required('Address is required!'),
            placeofbirth: Yup.string()
            .min(2,'Too short! Please enter at least 2 characters.')
            .required('required!'),
            phonenumber: Yup.number()
            .test('len', 'Phone Number is either too short or too long. Please Enter exactly 10 digits', (val) => { if(val) return val.toString().length === 10; })
            .required('Phone Number is Required.')
        }),
        
        onSubmit: (values,{resetForm}) =>(
            // console.log("submitttttted"),
            // alert(JSON.stringify(values,null,2)),
            props.formDataAdd(values),
            resetForm(),
            props.clearEdit
           
        ),
        enableReinitialize:true
        
    })

    return(
        <div>
            {/* <form className='forminputs' onSubmit ={formik.handleSubmit}>
                <label className='Label' htmlFor="firstName">FirstName</label>
                <input type='text' id='firstName' name='firstName'
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}></input>
                {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
               
                <label className='Label' htmlFor="lastName">LastName</label> 
                <input type='text' id='lastName' name='lastName'
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}></input>
                {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
               
                <label className='Label' htmlFor="dateofbirth">DateOfBirth</label>
                <input type='date' id='dateofbirth' name='dateofbirth'
                value={formik.values.dateofbirth}
                onChange={formik.handleChange}></input>
               
                <label className='Label'>Address</label>
                <label  htmlFor='line1'>Line 1</label>
                <input className='Label' type='text' id='Line1' name='Line1'
                value={formik.values.Line1}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}></input>
                {formik.errors.Line1 ? <div>{formik.errors.Line1}</div> : null}
                <label className='Label' htmlFor='line2'>Line 2</label>
                <input type='text' id='Line2' name='Line2'
                value={formik.values.Line2}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}></input>
                {formik.errors.Line2 ? <div>{formik.errors.Line2}</div> : null}
               
                <label className='Label' htmlFor="placeofbirth">PlaceOfBirth</label>
                <input type='text' id='placeofbirth' name='placeofbirth'
                value={formik.values.placeofbirth}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}></input>
               
                <label className='Label' htmlFor="phonenumber">Phone Number</label>
                <input type='number'className='no-arrow' id ='phonenumber' name='phonenumber'
                value={formik.values.phonenumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}></input>
               
                <button style={{display:"block"}} type = 'submit'>Submit</button>
            </form> */}
            {/* {console.log(typeof(formik.values.phonenumber))} */}
            <Input val={formik.values}
            changed={formik.handleChange}
            blur={formik.handleBlur}
            error={formik.errors}
            touched = {formik.touched}
            submit={formik.handleSubmit}/>
        </div>
    )
}

export default Form;