import React from 'react';
import './table.css';


const Table = (props) =>{
    // const tableItem = props.enteredData.map((data)=>{
    //                 return(
    //                     <div>
    //                        <table>
    //                           {/* <tr>
    //                               <th>FirstName</th>
    //                               <th>LastName</th>
    //                               <th>DateOfBirth</th>
    //                               <th>Address</th>
    //                               <th>PlaceOfBirth</th>
    //                               <th>PhoneNumber</th>
    //                           </tr> */}
    //                           <tr>
    //                             <td>{data.firstName}</td>
    //                             <td>{data.lastName}</td>
    //                           </tr>
    //                        </table>
    //                     </div>
    //                 );
    //             })
    const tableItem = 
        <div>
            
            <table className="table" >
           
                <tr>
                    <th>Name</th>
                    <th>DateOfBirth</th>
                    <th>Address</th>
                    <th>PlaceOfBirth</th>
                    <th>PhoneNumber</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                {props.enteredData.map((data,index)=>{
                    return(
                        <tr>
                            <td>{data.firstName} {data.lastName}</td>
                            <td>{data.dateofbirth}</td>
                            <td>{data.Line1},{data.Line2}</td>
                            <td>{data.placeofbirth}</td>
                            <td>{data.phonenumber}</td>
                            <td><button className="tablebuttons" onClick={()=>props.onEdit(index,data.id)}>edit</button></td>
                            <td><button onClick={()=>props.onDelete(data.id)}>Delete</button></td>
                        </tr>
                    )
                })}
            </table>
        </div>
    return(
        <div className="tableposition">   
        
            {tableItem}
        </div>
    );
}

export default Table;