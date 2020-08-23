import React, { useState, useEffect } from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';
import {fetchCountries} from '../../api';

import styles from './CountryPicker.module.css';

const CountryPicker = ({handleCountryChange}) => {

    const [countryData, setCountryData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            setCountryData(await fetchCountries());
        }
        getData();
    },[countryData])

    return(
        <>
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue='' onChange={(e)=>handleCountryChange(e.target.value)} >
                <option value=''>Global</option>
                {countryData.map((country,i) => <option key={i}>{country}</option>)}
            </NativeSelect>
        </FormControl>
        </>
    );
}

export default CountryPicker;