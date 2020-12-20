import React, { Component } from 'react';

const api = `http://localhost:3001/api/productos/cantidadPro`

class Products extends Component {
	constructor(){
		super();
		this.state = {
			products: ''
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
			products: data.cantidad,
		})
	}

	render() { 
		return ( 
            <div className="col-md-4 mb-4">
            <div className="card border-left-primary shadow h-100 py-2">
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1"> PRODUCTOS EN BASE DE DATOS ACTIVOS</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{this.state.products}</div>
                        </div>
                        <div className="col-auto">
                            <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         );
	}
}
 
export default Products;