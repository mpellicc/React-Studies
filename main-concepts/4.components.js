function Ciao(props) {
  return <h1>Ciao, {props.nome}</h1>;
}

/* OPPURE USARE CLASSE ES6
class Ciao extends React.Component {
  render() {
    return <h1>Ciao, {this.props.nome}</h1>;
  }
}
*/

const elemento = <Ciao nome="Sara" />;
ReactDOM.render(elemento, document.getElementById("root"));

/*  NIDIFICAZIONE DI COMPONENTI */
function Avatar(props) {
  return (
    <img
      className="Avatar"
      src={props.utente.avatarUrl}
      alt={props.utente.nome}
    />
  );
}

function InfoUtente(props) {
  return (
    <div className="InfoUtente">
      <Avatar utente={props.utente} />
      <div className="InfoUtente-nome">{props.utente.nome}</div>
    </div>
  );
}

function Commento(props) {
  return (
    <div className="Commento">
      <InfoUtente utente={props.autore} />
      <div className="Commento-testo">{props.testo}</div>
      <div className="Commento-data">{formatDate(props.data)}</div>
    </div>
  );
}

/*** Tutti i componenti React devono comportarsi come funzioni pure rispetto alle proprie props. ***/