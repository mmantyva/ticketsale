import React, {useState, useEffect} from 'react';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import MaterialTable from 'material-table';
import TableIcons from './TableIcons';
import {Link} from 'react-router-dom';

function Events(props) {

    const [vents, setVents] = useState([]);
    const api_vents = 'https://hot-ticketguru.herokuapp.com/api/vents';
    const api_types = 'https://hot-ticketguru.herokuapp.com/api/types';

    useEffect(() => {
        fetchVents();
    }, [])


    const fetchVents = () => {
        fetch(api_vents)
            .then(response => response.json())
            .then(data => setVents(data._embedded.vents))
            .catch(err => console.error(err))
    }

    const columns = [
        { title: 'Event name:', field: 'eventname'},
        { title: 'Performer:', field: 'performer'},
        { title: 'Event time:', field: 'eventtime'},
    ]

    return (
        <div style={{ height: 600, width: '75%', margin: 'auto', marginTop: 10 }}>
            <div className='separator'></div>
            <MaterialTable
            title="Sell tickets to events"
            actions={[{
                icon: () => <AddCircleOutlineIcon />,
                tooltip: 'Sell ticket',
                onClick: (event, rowData) => {
                    props.history.push('/typepage', rowData);
                }
            }]}
            localization={{
                header: {
                    actions: 'Sell ticket'
                }
            }}
            icons={TableIcons}
            data={vents}
            columns={columns}
            options={{
                search: true,
                headerStyle: {fontWeight: 'bold'},
                actionsColumnIndex: -1
            }}
            />
        </div>

    );
}

export default Events;