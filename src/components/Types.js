import React, {useState, useEffect} from 'react';
import NewTicket from './NewTicket';
import MaterialTable from 'material-table';
import tableIcons from './tableicons';



function Types(props) {

    const [types, setTypes] = useState([]);
    const api_types = 'https://hot-ticketguru.herokuapp.com/api/types';
    const api_events = 'https://hot-ticketguru.herokuapp.com/api/vents';

    useEffect(() => {
        fetchTypes();
    }, [])

    const fetchTypes = () => {
        fetch(api_types)
        .then(response => response.json())
        .then(data => setTypes(data._embedded.types))
        .catch(err => console.error(err))
    }

    const sellTicket = (ticket) => {
        fetch(api_events, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(ticket)
        })
        .catch(err => console.error(err))
    }

    const columns = [
        { title: 'Type name:', field: 'typename'},
        { title: 'Price:', field: 'price'},
        { title: 'Event:', field: '_links.vent.href'}, //tähän eventin nimen jos saa kaivettua
        {
            title: 'Sell ticket',
            field: '_links.vent.href', // tässä näkyy osoite johon pitäisi lähettää POST uuden lipun aikaansaamiseksi
            //cellRendererFramework: params =>
            //<Button onClick={() => sellTicket(params.value)} />
        } 
    ]

    return (
        <div style={{ height: 600, width: '75%', margin: 'auto', marginTop: 10 }}>
            <MaterialTable
            title="Ticket types"
            icons={tableIcons}
            data={types}
            columns={columns}
            options={{
                search: true,
                headerStyle: {fontWeight: 'bold'}
            }}
            />
        </div>
    );
}

export default Types;