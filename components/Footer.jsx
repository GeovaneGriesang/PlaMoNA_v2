import { tokens } from "@/app/theme";
import { Box, Typography } from "@mui/material";
import Image from "next/image";


export default function Footer() {
    return(
        <>
            <Box py='2em' px={{sm: '5em', xs: '2em'}} width='100vw' mt='5em' classname='drop-shadow-lg' sx={{
                    background: tokens.grey[100],
                    color: "#000000",
                    backdropFilter: 'blur(2px)',
                    boxShadow: '0em -0.5em 1em #a0a0a077'
                }}>
                <Box display='flex' justifyContent='space-between' flexDirection='row'>
                    <Box sx={{
                                objectFit: 'contain',
                                width: {sm: '20em', xs: '10em' },
                                height: 'auto',
                                display: 'flex',
                                alignItems: 'center',
                        }}>
                        <Image src='/logo_horizontal.png' alt='PlaMoNa' width={1000} height={400}/>
                    </Box>
                    <Box sx={{
                                objectFit: 'contain',
                                width: {sm: '20em', xs: '10em' },
                                height: 'auto',
                                display: 'flex',
                                alignItems: 'center',
                        }}>
                        <Image src='/ifsul_colorido.png' alt='IFSUL' width={1474} height={268}/>
                    </Box>
                </Box>
                <Typography variant="body2" textAlign='center'>
                        2023 &copy; IFSul - Venâncio Aires
                </Typography>
            </Box>
        </>
    )
}