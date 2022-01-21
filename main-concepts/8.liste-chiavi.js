/*
function ListaNumeri(props) {
  const numeri = props.numeri;
  const lista = numeri.map((numero) => (
    <li key={numero.toString()}>{numero}</li>
  ));
  return <ul>{lista}</ul>;
}
// serve la prop key per far funzionare la lista
const numeri = [1, 2, 3, 4, 5];
ReactDOM.render(
  <ListaNumeri numeri={numeri} />,
  document.getElementById("root")
);
*/

function Numero(props) {
  // Corretto! Non è necessario specificare la chiave qui:
  return <li>{props.valore}</li>;
}

function ListaNumeri(props) {
  const numeri = props.numeri;
  const lista = numeri.map((numero) => (
    // Corretto! La chiave deve essere specificata all'interno dell'array.
    <Numero key={numero.toString()} valore={numero} />
  ));
  return <ul>{lista}</ul>;
}

const numeri = [1, 2, 3, 4, 5];
ReactDOM.render(
  <ListaNumeri numeri={numeri} />,
  document.getElementById("root")
);

/*  IN JSX DIRETTAMENTE
function ListaNumeri(props) {
  const numeri = props.numeri;
  return (
    <ul>
      {numeri.map((numero) =>
        <Numero key={numero.toString()}
                valore={numero} />
      )}
    </ul>
  );
}
*/
