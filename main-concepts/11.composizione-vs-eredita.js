function BordoFigo(props) {
  return (
    <div className={"BordoFigo BordoFigo-" + props.colore}>
      {props.children}
    </div>
  );
}

/*
function FinestraBenvenuto() {
  return (
    <BordoFigo colore="blue">
      <h1 className="Finestra-titolo">Benvenuto/a!</h1>
      <p className="Finestra-messaggio">
        Ti ringraziamo per questa tua visita nella nostra nave spaziale!
      </p>
    </BordoFigo>
  );
}
*/

// non necessariamente va usato props.children, si può personalizzare
function Pannello(props) {
  return (
    <div className="Pannello">
      <div className="Pannello-sinistra">{props.sinistra}</div>
      <div className="Pannello-destra">{props.destra}</div>
    </div>
  );
}

function App() {
  return <Pannello sinistra={<Contatti />} destra={<Chat />} />;
}

//  SPECIALIZZAZIONE DEI COMPONENTI
// FinestraBenvenuto è una specializzazione di Finestra:
function Finestra(props) {
  return (
    <BordoFigo colore="blue">
      <h1 className="Finestra-title">{props.titolo}</h1>
      <p className="Finestra-messaggio">{props.messaggio}</p>
    </BordoFigo>
  );
}

// funzione
function FinestraBenvenuto() {
  return (
    <Finestra
      titolo="Benvenuto/a!"
      messaggio="Ti ringraziamo per questa tua visita nella nostra      nave spaziale!"
    />
  );
}

// classe
class FinestraRegistrazione extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.state = { login: "" };
  }

  render() {
    return (
      <Finestra
        titolo="Programma di Esplorazione di Marte"
        messaggio="Qual'è il tuo nome?"
      >
        <input value={this.state.login} onChange={this.handleChange} />
        <button onClick={this.handleSignUp}>Registrami!</button>
      </Finestra>
    );
  }

  handleChange(e) {
    this.setState({ login: e.target.value });
  }

  handleSignUp() {
    alert(`Benvenuto/a a bordo, ${this.state.login}!`);
  }
}
