import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';

const Cards = ({datas: {confirmed, recovered, deaths, lastUpdate}}) => {

    if(!confirmed) {
        return <h1>Loading....</h1>;
    }

    console.log(confirmed);

    const CardModule = ({name, endValue, infos}) => {

        let cname = '';
        if(name==='Infected'){
            cname = styles.infected;
        } else if(name==='Recovered'){
            cname = styles.recovered;
        } else {
            cname = styles.deaths;
        }

        return (
            <>
            <Grid item component={Card} xs={12} md={3} className={cx(styles.card, cname)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>{name}</Typography>
                        <Typography variant='h5'>
                            <CountUp start={0} end={endValue} duration={2.5} separator=',' />
                        </Typography>
                        <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'>{infos}</Typography>
                    </CardContent>
                </Grid>
            </>
        );
    }

    return (
        <>
         <div className={styles.container}>
            <Grid container spacing={3} justify='center'>
                <CardModule 
                    name='Infected'
                    endValue={confirmed.value}
                    infos='Number of active cases of COVID-19'
                />
                <CardModule 
                    name='Recovered'
                    endValue={recovered.value}
                    infos='Number of recoveries from COVID-19'
                />
                <CardModule 
                    name='Deaths'
                    endValue={deaths.value}
                    infos='Number of deaths caused by COVID-19'
                />
            </Grid>
         </div>
        </>
    );
}

export default Cards;