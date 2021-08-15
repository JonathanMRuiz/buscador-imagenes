import React, { Component } from 'react';
import Buscador from './components/Buscador';
import Resultados from './components/Resultados';

class App extends Component {
 
  state = {
  termino: '',
    imagenes:[],
    pagina:''
  };

  scroll = () =>{
    const elemento = document.querySelector('.jumbotron');
    elemento.scrollIntoView('smooth','start');
  }


  paginaAnterior = () =>{
    //leer el state de la pagina actual
    let pagina = this.state.pagina;

    // Leer si la pagina es 1, ya no ir hacia atras  
    if (pagina ===1) return null;

    //sumar uno a la pagina actual
    pagina = pagina - 1;

    //agregar el cambio al state
    this.setState({
      pagina
    
    },()=>{
      this.consultarApi();
      this.scroll();
    })



    //console.log(pagina);
  }

  paginaSiguiente = () =>{
    //leer el state de la pagina actual

    let pagina = this.state.pagina;

    //sumar uno a la pagina actual

    pagina = pagina + 1;
    //agregar el cambio al state

    this.setState({
      pagina
    },()=>{
      this.consultarApi();
    })


    //console.log(pagina);
  }




  consultarApi = () =>{
    const termino = this.state.termino;
    const pagina = this.state.pagina;
    const url =`https://pixabay.com/api/?key=22917641-b52d86d1c4dbf35d76dc6c818&q=${termino}&per_page=30&page=${pagina}`;

    fetch(url)
      .then(respuesta => respuesta.json())
      .then(resultado => this.setState({imagenes : resultado.hits}))
  }

  datosBusqueda = (termino) =>{
    this.setState({
      termino : termino,
      pagina: 1
    }, () => {
      this.consultarApi();
    });
    
  }

  render(){
  return(
    <div className="app container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de imagenes</p>
        <Buscador 
          datosBusqueda = {this.datosBusqueda}
        />
      </div>
      
      <div className="row justify-content-center">
        <Resultados 
          imagenes = {this.state.imagenes}
          paginaSiguiente = {this.paginaSiguiente}
          paginaAnterior = {this.paginaAnterior}

        />
      </div>
    </div>
  );
  }
}

export default App;