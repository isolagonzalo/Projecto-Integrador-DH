import React, { Component } from 'react';

const api = `http://localhost:3001/api/carritos/finalizados`

class Amount extends Component {
	constructor(){
		super();
		this.state = {
			cart: ''
		}
	}

	apiCall(url, consecuencia){
		fetch(url)
		.then( response => response.json())
		.then( data => consecuencia(data))
		.catch( error => console.log(error))
	}

	componentDidMount(){
		this.apiCall(api, this.personaje)
	}

	personaje = (data) =>{
		console.log(data)
		this.setState({
			cart: data.cantidad,
		})
	}

	render() { 
		return ( 
            <div className="col-md-4 mb-4">
		<div className="card border-left-success shadow h-100 py-2">
			<div className="card-body">
				<div className="row no-gutters align-items-center">
					<div className="col mr-2">
						<div className="text-xs font-weight-bold text-success text-uppercase mb-1">CANTIDAD DE CARROS FINALIZADOS</div>
						<div className="h5 mb-0 font-weight-bold text-gray-800">{this.state.cart}</div>
					</div>
					<div className="col-auto">
						<i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
					</div>
				</div>
			</div>
		</div>
	</div>
         );
	}
}
 
export default Amount;