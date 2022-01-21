const animals = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'];
const list = animals.map((animal) => <li key={animal}>{animal}</li>)

export default function Exercise4() {

    return (
        <div className='exercise'>
        <ul>
            {list}
        </ul>
        </div>
    );
}