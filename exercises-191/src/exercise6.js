import { useState } from 'react';

function GreetingForm(props) {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleLastNameChange(e) {
        setLastName(e.target.value);
    }
    
    function handleSubmit(e) {
        alert(`Hello ${name} ${lastName}`)
    }

    return (
        <div className='exercise'>
        <form onSubmit={handleSubmit}>
            <label><input type='text' placeholder='Name' onChange={handleNameChange} /></label>
            <label><input type='text' placeholder='Last name' onChange={handleLastNameChange} /></label>
            <label><input type='submit' value='GREET ME' /></label>
        </form>
        </div>
    );
}

export default function Exercise6() {
    return(
        <GreetingForm />
    );
}