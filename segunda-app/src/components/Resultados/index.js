import React, { Component } from 'react';
import Imagen from '../Imagen';
import Paginas from '../Paginas';

class Resultados extends Component {
    
    mostrarImagenes = () =>{
        const imagenes = this.props.imagenes;
       
        //Cantidad de elementos en el arreglo se ejecuta aca y no en la linea siguiente
        if(imagenes.lenght === 0) return null;

        console.log(imagenes);
        return (
            <>
            <Paginas 
              
              paginaSiguiente={this.props.paginaSiguiente}
              
              paginaAnterior={this.props.paginaAnterior}
              
              />
              <div className="col-12 p-5 row">

                  {imagenes.map(imagen => (
                      <Imagen
                        key={imagen.id}
                        imagen ={imagen}
                      />
                  ) ) }

              </div>  
              <Paginas 
              
              paginaSiguiente={this.props.paginaSiguiente}
              
              paginaAnterior={this.props.paginaAnterior}
              
              />

              

            </>
        )
    }
  
    render(){
        return(
            <>
            {this.mostrarImagenes()}
            </>
        );
    }
}


export default Resultados;