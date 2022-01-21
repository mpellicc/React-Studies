export default function Exercise1() {
    function clickedMessage() {
        alert('Clicked!');
    }

    return (
        <div className='exercise'>
        <button onClick={clickedMessage}>
        Click Me
        </button>
        </div>
    );
}