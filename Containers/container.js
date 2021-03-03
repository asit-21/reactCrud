import React ,{Component} from 'react';
import Form from '../Components/form/form';
import Table from '../Components/table/table';
import './container.css';

class Container extends Component{
    state={
        formData:[],
        dataToEdit: null
    }

    addDataHandler = (data) =>{
        const temp = [...this.state.formData]
        temp.push({...data,id:Math.random()*2759,edit:false})
        // console.log(temp)
        this.setState({formData:temp})
    }

    deleteRowHandler = (id) =>{
        let temp = [...this.state.formData]
        temp = temp.filter((item)=>item.id!==id)
        this.setState({formData:temp})
    }

    editDataHandler = (index,id) =>{
        this.setState({dataToEdit:this.state.formData[index]})
        this.deleteRowHandler(id)
    }

    clearEditHandler=()=>{
        this.setState({dataToEdit:null})
        console.log(this.state.dataToEdit)
    }
    render(){
       
        return(
            <div>
                <Form formDataAdd={(data)=>this.addDataHandler(data)}
                toEdit={this.state.dataToEdit}/>
                <Table enteredData={this.state.formData}
                onDelete={(id)=>this.deleteRowHandler(id)}
                onEdit={(index,id)=>this.editDataHandler(index,id)}
                clearEdit={()=>this.clearEditHandler()}/>
            </div>
            
        )
    }
}

export default Container;