import { useState } from "react";

function Product() {
    const [products, setProducts] = useState(
        [
            {
                id: 1,
                serial: 'GDZ1954BR',
                name: 'Godzilla Blu-ray',
                desc: 'Godzilla (1954) Blu-ray edition. Language: Japanese, Subtitles: English.',
                price: 43.25,
            },
            {
                id: 2,
                serial: 'FRR458ITA',
                name: 'Ferrari 458 Italia',
                desc: 'Sports car berlinetta type produced by Ferrari in 2009',
                price: 205000,
            },
            {
                id: 3,
                serial: 'EVNCHIFER',
                name: 'Evian Chiara Ferragni',
                desc: 'Evian and Chiara Ferragni band together to reate the new iconic limited edition Evian',
                price: 8,
            },
            {
                id: 4,
                serial: 'SNYPLSTN5',
                name: 'Sony PlayStation 5',
                desc: 'Home video game console developed by Sony Interactive Entertainment, released in November 2020',
                price: 499.99,
            },
            {
                id: 5,
                serial: 'AMZSPMAN1',
                name: 'AMAZING SPIDER-MAN Vol. 1',
                desc: 'First comic of the iconic The Amazing Spider-Man series (1963)',
                price: 131450,
            },
            {
                id: 6,
                serial: 'MCDFILOFS',
                name: 'Filet-o-fish Menu',
                desc: 'McDonald\'s Filet-o-fish menu: with drink and fries.',
                price: 4.90,
            }
        ]
    );

    const list = products.slice();
    const formattedList = list.map((item) => {
        <li>{item.name}</li>
    });
    
    return (
        <div>
            <h1>Product Component</h1>
            <ul>
                {formattedList}
            </ul>
        </div>
    );
}

export default Product;