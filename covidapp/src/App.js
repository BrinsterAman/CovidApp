import React, { useEffect, useState } from 'react';
import { Cards, Chart, CountryPicker } from './components';
import { fetchData } from './api';

import styles from './App.module.css';
import coronaImg from './images/covid_image.png';

const App = () => {

    const [data, setData] = useState({});
    const [country, setCountry] = useState('');

    useEffect(() => {
        const getData = async () => {
            const res = await fetchData();
            setData(res);
        }
        getData();
    }, [])

    const handleCountryChange = async (countryName) => {
        const res = await fetchData(countryName);
        setData(res);
        setCountry(countryName);
    }

    return (
        <>
            <div className={styles.container}>
            <img className={styles.image} src={coronaImg} alt='COVID-19' />
                <Cards datas={data} />
                <CountryPicker handleCountryChange={handleCountryChange}/>
                <Chart data={data} country={country}/>
            </div>
        </>
    );
}

export default App;