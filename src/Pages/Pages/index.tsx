import React, { useEffect } from 'react';
import httpCall from '../../Utilities/httpCall';
import { DivContainerHome } from './Style';

function Home () {

    const fetchPeople = async () => {
        try{
            const response = await httpCall('https://swapi.dev/api/people', 'GET');
            console.log (response.data);
        }   catch (err) {
            console.log("err ---> ", err);

        }

    } 

    useEffect(() => {
        fetchPeople();
    
    }, [])

    return (
        <DivContainerHome>
        </DivContainerHome>
    )
}

export default Home ;