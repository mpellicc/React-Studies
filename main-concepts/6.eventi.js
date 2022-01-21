class Interruttore extends React.Component {
  constructor(props) {
    super(props);
    this.state = { acceso: true };

    // Necessario per accedere al corretto valore di `this` all'interno della callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      acceso: !prevState.acceso,
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.acceso ? "Acceso" : "Spento"}
      </button>
    );
  }
}

ReactDOM.render(<Interruttore />, document.getElementById("root"));

// ALTERNATIVA A BIND (che preferisco)'
class LoggingButton extends React.Component {
  handleClick() {
    console.log("Il valore di `this` è: ", this);
  }

  render() {
    // Questa sintassi garantisce che `this` sia associato correttamente all'interno di handleClick
    return <button onClick={() => this.handleClick()}>Clicca qui</button>;
  }
}

// PASSARE ARGOMENTI A GESTORI EVENTI CON E SENZA bind
/*
 <button onClick={(e) => this.deleteRow(id, e)}>Elimina riga</button>
<button onClick={this.deleteRow.bind(this, id)}>Elimina riga</button>
*/
