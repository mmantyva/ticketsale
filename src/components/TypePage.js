import React, {useState, useEffect} from 'react';
import Container from '@material-ui/core/Container';
//import MaterialTable from 'material-table';
//import TableIcons from './TableIcons';

//tänne välittyy tieto siitä, mikä eventti kyseessä

// tarvitaan lipun yhteys lipputyypin kautta eventiin propsiksi
// eli API:n sisäinen linkki.

function TypePage(props) {
    const [types, setTypes] = useState([]);

    useEffect(() => fetchTypes(), []);

    console.log(props.history.location.state);
    const url = props.history.location.state._links.types.href;
    const event = props.history.location.state;

    const fetchTypes = () => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setTypes(data._embedded.types)
            })
            .catch(err => console.error(err))
    }

    return (
        <div>
            <Container maxWidth='sm'>
            <div className='separator'></div>
            <h2>Event: {event.eventtime}, {event.performer}: {event.eventname} </h2>
            <h4>Available ticket types: </h4>
            { types.map(type => <p key={type._links.self.href}>{type.typename}: {type.price}€</p>) }
            <p>Tähän tulisi sitten joku näkymä, jossa haetaan näkyville:
                <li>jotain klikkinappia mistä valitaan että montako kappaletta mitäkin tyyppiä
                (jokainen näistä oma lippuinstanssinsa)
                </li>
                <li>ja sitten niiden loppusumma</li>
                <li>myyntinappi, jota painamalla syntyy uusi transaction??</li>
            </p>
            </Container>
        </div>
    );
}

export default TypePage;