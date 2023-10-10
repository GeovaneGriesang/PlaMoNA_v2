import { tokens } from "@/app/theme";
import { Button, Box, Typography, Slide } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
        main: tokens.grey[900],
    },
  },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
  });

export default function Navbar({buttons, logo}) {
  return (
    <>
    <ThemeProvider theme={theme}>
      <Box className="flex py-3 shadow-lg lg:px-40 md:px-10" sx={{
        backgroundColor: tokens.grey[100], 
        flexDirection: {sm: 'row', xs: 'column'},
        justifyContent: 'space-between',
        alignItems: 'center'
        }}>
        <Box sx={{
          color: tokens.grey[900],
        }}className="align-center justify-center p-3 lg:text-3xl md:text-lg">
          {logo}
        </Box>
        <Box sx={{alignItems: 'center', display: 'flex', gap: '.5em'}} className="align-center lg:justify-center,space-x-4,p-3 md:justify-end,space-x-2 p-2">
          {buttons.map((b, index) => (
            <Button variant="outlined" size={'small'} color='primary' key={index} href={b.href}>
              {b.text}
            </Button>
          ))}
        </Box>
      </Box>
      {/* Mostar se usuário não está cadastrado */}
      {/* <Box sx={{
        display: 'flex',
        backgroundColor: tokens.blueAccent[900],
        height: '2.3em', 
        flexDirection: {sm: 'row', xs: 'column'},
        justifyContent: 'center',
        alignItems: 'center',
      }}>

        

        <Slide direction="left" in={true} mountOnEnter unmountOnExit>
          <Typography variant={`${
              theme.breakpoints.down("md") ? "body2" : "body1"
            }`} color={'#fff'} textAlign={'center'} maxHeight={'2em'} overflow={'hidden'} whiteSpace={'nowrap'} textOverflow={'ellipsis'}> 
          Registre-se para receber alertas de cheia ou inundação!
          </Typography>
        </Slide> 
      </Box> */}
      </ThemeProvider>
    </>
  );
}