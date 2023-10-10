'use client'
import React, { useEffect, useState } from 'react';
import {
    Box,
    Grid,
    Paper,
    ThemeProvider,
    Typography
} from '@mui/material';
import { obterMedicao } from '@/api/database';
import Grafico from '@/components/Grafico';
import { theme, tokens } from './theme';
import Navbar from '@/components/Navbar';
import WeatherDisplay from '@/components/WeatherDisplay';
import Footer from '@/components/Footer';
import Image from 'next/image';
import GraficoComp from '@/components/GraficoComp';

const buttons = [
    {
      text: "Monitoramento",
      href: "/monitoramento",
    },
    {
      text: "Sobre",
      href: "/sobre",
    },
  ];

export default function Page() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const result = await obterMedicao('semana');
            setData(result);
        }

        fetchData();
    }, []);

    return (
        <>
        <ThemeProvider theme={theme}>
            <Box sx={{
                    backgroundColor: tokens.grey[100],
                }}>
                <Navbar logo={
                    <Box sx={{
                            objectFit: 'contain',
                            width: {sm: '7em', xs: '8em' },
                            height: 'auto'
                    }}>
                        <Image src='/logo_horizontal.png' alt='' width={1000} height={400}/>
                    </Box>
                } buttons={buttons} />
                
                <Box sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                }}>
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
                            <Box sx={{
                                borderRadius: '1.5em',
                                backgroundColor: tokens.primary[500],
                                height: '25em',
                                padding: '1em',
                                boxShadow: '2em 0 3em #00000077',
                            }}>
                                <Grafico data={data} />
                            </Box>
                    </Box>
                    <WeatherDisplay />
                </Box>
                <Footer/>
            </Box>
        </ThemeProvider>
        </>
    );
}
