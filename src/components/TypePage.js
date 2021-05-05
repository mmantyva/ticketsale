import React, {useState, useEffect} from 'react';
import MaterialTable from 'material-table';
import TableIcons from './TableIcons';


// tarvitaan lipun yhteys lipputyypin kautta eventiin propsiksi
// eli API:n sisäinen linkki.

function TypePage(props) {



    return(
        <div>
            <div className='separator'></div>
            <p>Tähän tulisi sitten joku näkymä, jossa haetaan näkyville:
                <li>kaikki ko. tapahtumaan saatavilla olevat lipputyypit hintoineen</li>
                <li>jotain klikkinappia mistä valitaan että montako kappaletta mitäkin tyyppiä
                    (jokainen näistä oma lippuinstanssinsa)
                </li>
                <li>ja sitten niiden loppusumma</li>
                <li>myyntinappi, jota painamalla syntyy uusi transaction??</li> 
            </p>
            <p>Jos joku meistä esim. osaisi toteuttaa nämä niin olis tosi kiva</p>
        </div>
    );
}

export default TypePage;