import React, { Component } from "react";
 
 

class ListContacts extends Component {
    constructor(props) {
        super(props);
        this.state = {
        data: [],
        page:1,
        size:5       
        
        };
    }
    updatePage(page){
        
        if(page>0){
            this.setState({ page: page })
        }
        
    }
    updateSize(event){
        
        const targetValue = event.target.value
         
        this.setState({ size: targetValue })
    }
    componentDidMount() {
        this.getApiData()
        
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        if(prevState.page!=this.state.page || prevState.size!=this.state.size ){
            this.getApiData()
        }
        
        
    }

    getApiData(){
        fetch(`api/contatos/?size=${this.state.size}&page=${this.state.page}`,)
        .then(response => {     
        return response.json();
        })
        .then(data => {
        this.setState(() => {
            return {
            data,
            
            };
        });
        });
    }

    deleteContact(id){
       

        fetch(`api/contatos/${id}/`,{
            method: 'DELETE',  
        })
        .then(response => {  
            this.getApiData()   
            return response.json();
            
        }).then(data => {
            console.log(data)
        });
         
        
    }

    render(){

        return(<div>  <table className="table table-dark">
        <thead>
         <tr>
             <th>#</th>
             <th>Nome</th>
             <th>Canal</th>
             <th>Valor</th>
             <th>Observação</th>
             <th> </th>
             <th> </th>
             </tr>
        </thead>
        <tbody>
        {this.state.data.map(contact => {
             return (
                 <tr key={contact.id}>
                     <td>{contact.id}</td>
                     <td>{contact.nome}</td>
                     <td>{contact.canal}</td>
                     <td>{contact.valor}</td>
                     <td>{contact.obs}</td>     
                     <td>
                        <button className="btn btn-sm btn-danger" onClick={()=>this.deleteContact(contact.id)}>Apagar</button>
                    </td>    
                    <td>
                        <button className="btn btn-sm btn-warning" onClick={()=>this.props.selectContact(contact)}>Editar</button>
                    </td>               
                 </tr>
             );
         })}
        </tbody>
    </table>
    <div className="form-group row">
         <label className="col-sm-1 col-form-label">Size</label>
         <div className="col-sm-6">
       
             <select className="form-control" onChange={(e)=>this.updateSize(e)} value={this.state.size} >
                 {[1,2,3,4,5,6,7,8,9,10].map((num) => { return (<option key={num} value={num}>{num}</option>)})}
             
             </select>
         </div>
         <div className="col-sm-4">
             <ul className="pagination ">
                 <li className="page-item"><a className="page-link" href="#" onClick={()=>this.updatePage(1)}>First</a></li>          
                 <li className="page-item"><a className="page-link" href="#" onClick={()=>this.updatePage(this.state.page)}>{this.state.page}</a></li> 
                 <li className="page-item"><a className="page-link" href="#" onClick={()=>this.updatePage(this.state.page+1)}>Next</a></li>
             </ul>
         </div>

     </div> </div>)
    }
}


export default ListContacts;
