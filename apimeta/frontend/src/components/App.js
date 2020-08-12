import React, { Component } from "react";
 
import ListContacts from "./ListContacts";
import FormContact from "./FormContact";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
        showList : true,
       
        
        };
    }

    toggleShowList(){        
        this.setState({
            showList :!this.state.showList,
            id :   "",
            nome: "",
            canal: "email",    
            valor: "",
            obs:  "",})
    }

    selectContact(contact){
        this.setState({
            id: contact.id,
            nome: contact.nome,
            canal: contact.canal ,    
            valor: contact.valor,
            obs: contact.obs
        })

        this.setState({showList :!this.state.showList})
        
       
    }
    

    render() {
        
        return (
        <div className="container">
            <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a>Contatos API</a></li>
                        <li className="breadcrumb-item"><a>{this.state.showList?"Lista de Usuários": "Usuário"}</a></li>
                        
                    </ol>
                </nav>
                <button className="btn btn-primary" onClick={()=>this.toggleShowList()}>                    
                    {this.state.showList? "Criar Contato" : "Mostrar Lista"}
                </button>
                <hr></hr>
                {this.state.showList? <ListContacts selectContact={this.selectContact.bind(this)}/>: <FormContact {...this.state} />}
            
                
            </div>
        );
    }
}

export default App;
