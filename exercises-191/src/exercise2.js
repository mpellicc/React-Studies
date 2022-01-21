export default function Exercise2() {
    function clickedMessage(n) {
        alert('You clicked on Button ' + n);
    }

    function Button(props) {
        const num = parseInt(props.num);

        return (
            <button onClick={() => {clickedMessage(num)}}>
            Button {num}
            </button>
        )
    }

    return (
        <div className='exercise'>
            <Button num='1' />
            <Button num='2' />
            <Button num='3' />
        </div>
    );
}