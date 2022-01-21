/* function Clock(props) {
  return (
    <div>
      <h1>Ciao, mondo!</h1>
      <h2>Sono le {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}

function tick() {
  ReactDOM.render(<Clock date={new Date()} />, document.getElementById("root"));
}

setInterval(tick, 1000);
*/

/*  CONVERTI Clock DA function A class PER UTILIZZARE LO state 
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  render() {
    return (
      <div>
        <h1>Ciao, mondo!</h1>
        <h2>Sono le {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
//  si passa da 'this.props.ecc' a 'this.state.ecc'

ReactDOM.render(<Clock />, document.getElementById("root"));
*/

// a questo punto l'orologio ancora non si aggiorna!

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    componentDidMount() {   // eseguito dopo render
        this.timerID = setInterval(() => this.tick(), 1000
        );
    }
  
    componentWillUnmount() {    // eseguito quando il componente viene distrutto
        clearInterval(this.timerID);
    }
    
    tick() {
        this.setState({
          date: new Date()
        });
      }
  
    render() {
      return (
        <div>
          <h1>Ciao, mondo!</h1>
          <h2>Sono le {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }