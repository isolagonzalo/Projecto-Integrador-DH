import React, { Component } from 'react';
//import logo from `../../../../site/public/images/imagenesProductos/${this.state.imagenRuta}`;
//const logo = require(`../../../../site/public/images/imagenesProductos/${this.state.imagenRuta}`);
const api = `http://localhost:3001/api/productos/ultimoProducto`

class LastProducts extends Component {
	constructor(){
		super();
		this.state = {
            id: '',
            nombre: '',
            precio: '',
            cantidad: '',
            categoria: '',
            estado: '',
            imagenRuta: ''
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
            id: data.id,
			nombre: data.nombre,
            precio: data.precio,
            cantidad: data.cantidad,
            categoria: data.categoria,
            estado: data.estado,
            imagenRuta: data.imagenRuta
		})
	}
   

	render() { 
		return ( 
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Último producto en Base de Datos</h6>
                    </div>
                    <div className="card-body">
                        <div className="text-center">
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: "15rem", borderRadius: "6rem" }} src={`http://localhost:3001/images/imagenesProductos/${this.state.imagenRuta}`} alt="dummy"/>
                        </div>
                        <p>Producto: {this.state.nombre}, Precio: ${this.state.precio}, Cantidad: {this.state.cantidad}, Categoria: {this.state.categoria}, Estado: {this.state.estado}.</p> 
                        <a target="_blank" rel="noopener noreferrer"  href={`http://localhost:3001/productos/detalle/${this.state.id}`}>Ver detalles del producto</a>
                    </div>
                </div>
            </div>
        );
	}
}
 
export default LastProducts;

