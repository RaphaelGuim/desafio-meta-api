import React, { Component } from "react";
 
 

class FormContact extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            id : this.props.id || "",
            nome:this.props.nome || "",
            canal:this.props.canal? this.props.canal: "email",    
            valor:this.props.valor ||"",
            obs:this.props.obs || "",
            status: ""
            
        };
    }
    changeCanal(e){
        this.setState({canal:e.target.value})
    }

    submitForm(e){
        
        e.preventDefault()

         
        fetch(`api/contatos/`,{
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body:JSON.stringify( {
                nome: this.state.nome,
                canal: this.state.canal ,    
                valor: this.state.valor,
                obs: this.state.obs
            })
        })
        .then(response => {  
            if(response.status == "201"){
                this.setState({
                    status:201,
                    message:"Usuário Criado com Sucesso",                  
                    messageClass:"success",
                    errors:"" 
                })
              }
              else{               
                  this.setState({

                      status:response.status,
                      message:"Ocorreu um erro",   
                      messageClass:"warning"                  
                  })
              }
              return response.json();
            
            
        }).then(data => {

            if(this.state.status!= 201){
                alert(this.state.status)
                
                this.setState({
                   
                    errors:[...Object.entries(data)]                 
                    
                })
            }else{
                this.setState({id:data.id})
            }
            
           
        });
    }


    submitFormUpdate(e){
        
        e.preventDefault()

         
        fetch(`api/contatos/${this.state.id}/`,{
            method: 'PUT', 
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body:JSON.stringify( {
                nome: this.state.nome,
                canal: this.state.canal ,    
                valor: this.state.valor,
                obs: this.state.obs
            })
        })
        .then(response => { 
             
            if(response.status == "200"){
              this.setState({
                status:200,
                message:"Atualizado com Sucesso",                  
                messageClass:"success",
                errors:""   
              })
            }
            else{               
                this.setState({
                    status:response.status,
                    message:"Ocorreu um erro",   
                    messageClass:"warning"                  
                })
            }
            return response.json();
           })
           .then(data => {

            if(this.state.status!= 200){
                
                this.setState({
                   
                    errors:[...Object.entries(data)]                 
                    
                })
            }
           
            
        });
    }
    eraseForm(){
        this.setState({
            status : "",
            message:"",
            id : "",
            nome:  "",
            canal: "email",    
            valor: "",
            obs: "",
            errors:""
        })

    }

    render(){

        return(
            <div>
                {this.state.message?
                    <div className={`alert alert-${this.state.messageClass}`} role="alert">
                       {this.state.message}
                       {this.state.errors?
                       (<ul>
                            {this.state.errors.map(error =>
                                <li>{error[0]} : {error[1]}</li>)
                            }
                        </ul>)
                        :null}
                    </div>
                :null}
                    
                <form>
                    <div  className="form-group">
                        {this.state.id?
                        
                        <div  className="form-group">                            
                            <label  >ID do Contato</label>
                            <input type="text"  className="form-control" value={this.state.id} readOnly />
                        </div>
                        : null  
                        }
                        <div  className="form-group">
                            <label  >Nome do Contato</label>
                            <input type="text"  className="form-control" value={this.state.nome} placeholder="Insira um nome"  onChange={(e)=>this.setState({nome:e.target.value})} />
                        </div>
                        <div  className="form-group">                   
                            <label  >Canal de Contato</label>
                            <select  className="form-control" value={this.state.canal} onChange={(e)=>this.setState({canal:e.target.value})} >
                                <option   value="email">Email</option>
                                <option   value="celular">Celular</option>
                                <option   value="fixo">Telefone Fixo</option>
                    
                            </select>
                            
                            <input type="text" value={this.state.valor}  className="form-control" placeholder={`Insira o ${this.state.canal}`} onChange={(e)=>this.setState({valor:e.target.value})} />
                        </div>

                        <div  className="form-group">
                            <label >Observação</label>
                            <textarea  className="form-control" value={this.state.obs} placeholder="Insira uma observação (opcional)" onChange={(e)=>this.setState({obs:e.target.value})}/>
                        </div>

                        {!this.state.id?
                            <button type="button" onClick={(e)=>this.submitForm(e)}  className="btn btn-success">Criar Contato</button>
                        :

                        <div className="btn-group" >
                            <button type="button" onClick={(e)=>this.submitFormUpdate(e)}  className="btn btn-warning">Atualizar Contato</button>
                            <button type="button" onClick={(e)=>this.eraseForm(e)}  className="btn btn-primary">Criar outro Contato</button>
                        </div>
                      }
                      
                       
                    </div>
                </form>
           
            </div>
        )
    }
}


export default FormContact;
