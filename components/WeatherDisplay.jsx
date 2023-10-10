import React, { useEffect, useState } from 'react';
import { Avatar, Box, Divider, Paper, ThemeProvider, Typography } from '@mui/material';
import { tokens, theme } from '@/app/theme';
import { WaterDrop, Thunderstorm, Air } from '@mui/icons-material'
import getClima from '@/api/climaapi';
import ReactAnimatedWeather from 'react-animated-weather';
import weatherData from '@/api/climaicons.json'


function findIconByCode(code, isDay) {
    const weatherEntry = weatherData.find(entry => entry.code === code);
    if(isDay===1){
        return weatherEntry ? weatherEntry.day : null;
    }else if(isDay===0){
        return weatherEntry ? weatherEntry.night : null;
    }else{
        return weatherEntry ? weatherEntry.icon : null;
    }
}

export default function WeatherDisplay() {
    const [data, setData] = useState({});

    useEffect(() => {
        async function fetchData() {
            const result = await getClima();
            console.log(result)
            setData(result);
        }

        fetchData();
    }, []);

    return(
        <ThemeProvider theme={theme}>
            <Box sx={{
                        width: {sm: '30em', xs: '20em'},
                        height: '26em',
                        padding: '.5em',
                        margin: '1em',
                        backgroundColor: tokens.primary[200],
                        borderRadius: '2em',
                        borderColor: tokens.primary[200]+"77",
                        border: "0.5em"
                        }}>
                {data && data.condition && (
                    <Box>
                        <Box sx={{
                            borderRadius: '1.5em',
                            backgroundColor: tokens.primary[500],
                            height: '25em',
                            padding: '1em',
                            boxShadow: '2em 0 3em #00000077',
                        }}>
                            <Box sx={{
                                display: 'flex',
                                gap: '2em',
                                padding: '2em',
                                flexDirection: {sm:'row', xs:'column'}
                            }}>
                                <Box height={'auto'} alignContent={'center'} m={'auto 0'} width={'5em'}>
                                <ReactAnimatedWeather
                                    icon={findIconByCode(data.condition.code, data.is_day)}
                                    color={tokens.blueAccent[300]}
                                    size={64}
                                    animate={true}
                                />
                                </Box>
                                <Box>
                                    <Typography variant='body1' color={tokens.grey[300]}>Venâncio Aires</Typography>
                                    <Typography variant='h4' color={tokens.grey[100]}>{Math.floor(data.temp_c) + "°C"}</Typography>
                                    <Typography variant='body1' color={tokens.grey[100]}>{data.condition.text}</Typography>
                                </Box>
                            </Box>
                            <Box>
                                <Divider sx={{
                                    borderColor: tokens.grey[300],
                                    borderBottomWidth: '1px',
                                }}/>
                            </Box>
                            <Box display={'flex'} justifyContent={'space-around'} p={'2em'} gap={'2em'}>
                                <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
                                    <Avatar sx={{
                                        backgroundColor: tokens.grey[600],
                                        width: '3em',
                                        height: '3em',
                                    }}>
                                        <WaterDrop sx={{fontSize:'2em'}}/>
                                    </Avatar>
                                    <Typography variant='body1' color={tokens.grey[100]} textAlign={'center'}>
                                        Umidade
                                    </Typography>
                                    <Typography variant='body2' color={tokens.grey[200]} textAlign={'center'}>
                                        {data.humidity+ "%"}
                                    </Typography>
                                </Box>
                                <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
                                    <Avatar sx={{
                                        backgroundColor: tokens.grey[600],
                                        width: '3em',
                                        height: '3em',
                                    }}>
                                        <Thunderstorm sx={{fontSize:'2em'}}/>
                                    </Avatar>
                                    <Typography variant='body1' color={tokens.grey[100]} textAlign={'center'}>
                                        Chuva
                                    </Typography>
                                    <Typography variant='body2' color={tokens.grey[200]} textAlign={'center'}>
                                        {data.precip_mm} mm
                                    </Typography>
                                </Box>
                                <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
                                    <Avatar sx={{
                                        backgroundColor: tokens.grey[600],
                                        width: '3em',
                                        height: '3em',
                                    }}>
                                        <Air sx={{fontSize:'2em'}}/>
                                    </Avatar>
                                    <Typography variant='body1' color={tokens.grey[100]} textAlign={'center'}>
                                        Vento
                                    </Typography>
                                    <Typography variant='body2' color={tokens.grey[200]} textAlign={'center'}>
                                        {data.wind_dir + " - "+ data.wind_kph +"km/h"}
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                )}
            </Box>
        </ThemeProvider>
    );
}