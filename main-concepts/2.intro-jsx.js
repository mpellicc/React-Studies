/*  COSTANTI
const name = 'Matteo';
const element = <h1>Hello, {name}!</h1>;

ReactDOM.render(
    element,
    document.getElementById('root')
); 
*/

/*  ESPRESSIONI 
function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Matteo',
    lastName: 'Pelliccione'
};

const element = (
    <h1>
        Hello, {formatName(user)}!
    </h1>
);

ReactDOM.render(
    element,
    document.getElementById('root')
);


/*  CICLI   
function getGreeting(user) {
    if (user) {
        return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
}
*/

/*  ATTRIBUTI   
const element = <div tabIndex="0"></div>;
*/

/*  TAG JSX CON FIGLI
const element = (
    <div>
        <h1>Hello!</h1>
        <h2>Good to see you here.</h2>
    </div>
);
*/

/*  ESEMPIO CON const E CON React.createElement 
const element = (
    <h1 className="greeting">
        Hello, world!
    </h1>
);
*/
const element = React.createElement(
    'h1',
    {className: 'greeting'},
    'Hello, world!'
);

