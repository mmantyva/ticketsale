import React, {useState, useEffect} from 'react';
import MaterialTable from 'material-table';
import tableIcons from './tableicons';


function Events() {

    const [events, setEvents] = useState([]);
    const api_events = 'https://hot-ticketguru.herokuapp.com/api/vents';
    const api_tickets = 'https://hot-ticketguru.herokuapp.com/api/tickets';

    useEffect(() => {
        fetchEvents();
    }, [])

    const fetchEvents = () => {
        fetch(api_events)
        .then(response => response.json())
        .then(data => setEvents(data._embedded.vents))
        .catch(err => console.error(err))
    }

    const columns = [
        { title: 'Event name:', field: 'eventname'},
        { title: 'Performer:', field: 'performer'},
        { title: 'Event time:', field: 'eventtime'},
        { title: 'Venue:', field: '_links.venue.href'},
    ]

    return (
        <div style={{ height: 600, width: '75%', margin: 'auto', marginTop: 10 }}>
            <MaterialTable
            title="Events"
            icons={tableIcons}
            data={events}
            columns={columns}
            options={{
                search: true,
                headerStyle: {fontWeight: 'bold'}
            }}
            />
        </div>

    );
}

export default Events;