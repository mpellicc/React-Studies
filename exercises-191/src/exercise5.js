const animals = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'];
const emoticons = ['🐶', '🐱', '🐔', '🐮', '🐑', '🐴']

function AnimalList(props) {
    const list = props.list;
    const emojis = props.emojis;
    const emojiList = [];
    for(let i=0; i<list.length; i++) {
        emojiList[i] = {
            emoji: props.emojis[i],
            animal: props.list[i],
        }
    }
    
    return (
        emojiList.map((animal) => <tr key={animal.animal}><td>{animal.emoji} {animal.animal}</td></tr>)
    )
}

export default function Exercise5() {
    return (
        <div className='exercise'>
        <table>
            <tbody>
                <AnimalList list={animals} emojis={emoticons} />
            </tbody>
        </table>
        </div>
    );
}