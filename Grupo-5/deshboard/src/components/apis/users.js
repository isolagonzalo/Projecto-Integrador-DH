import React, { Component } from 'react';

const api = `http://localhost:3001/api/usuarios/cantidad`

class Info extends Component {
	constructor(){
		super();
		this.state = {
			users: ''
		}
	}

	apiCall(url, consecuencia){
		fetch(url)
		.then( response => response.json())
		.then( data => consecuencia(data))
		.catch( error => console.log(error))
	}

	componentDidMount(){
		console.log("me monte")
		this.apiCall(api, this.personaje)
	}

	personaje = (data) =>{
		console.log(data)
		this.setState({
			users: data.cantidad,
		})
	}

	render() { 
		return ( 
        <div className="col-md-4 mb-4">
            <div className="card border-left-warning shadow h-100 py-2">
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">CANTIDAD DE USUARIOS
                            </div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{this.state.users}</div>
                        </div>
                        <div className="col-auto">
                            <i className="fas fa-user-check fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         );
	}
}
 
export default Info;