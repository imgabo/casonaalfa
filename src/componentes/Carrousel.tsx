import { Carousel } from "@mantine/carousel";
import { Container, Image, createStyles, Text, Transition  } from "@mantine/core";
import Principal from "../assets/Principal.png"
import Principal2 from "../assets/proyecto1.webp"
import { CSSTransition } from 'react-transition-group';
import React from "react";
const useStyles = createStyles((theme) => ({

    titulo: {
        position:'absolute',
        top:0,
        right:0,
        bottom:0,
        left:0,
        margin:'auto',
        color:'#5EA89C',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        textShadow: '2px 2px 0px #fff, -1px -1px 0px #fff, -1px 1px 0px #fff, 1px -1px 0px #fff',
    }


}));

function Carrousel() {

    const { classes } = useStyles();
    const [showText2, setShowText2] = React.useState(false);
    const [showText, setShowText] = React.useState(false);
    React.useEffect(() => {
      // Simula un retardo para mostrar el texto después de un tiempo
      setTimeout(() => {
        setShowText2(true);
      }, 1500);
      setTimeout(() => {
        setShowText(true);
      }, 1000);
      
    }, []);
    return (
        <div style={{position:'relative',overflow:'hidden', width:'100%', height:'58vh'}} >
        
            <Image
                height={'600'}
                    src={Principal}
                    style={{position: 'absolute', top: 0, left: 0, zIndex:1, width: '100%' }}
                />
            <Image 
                src={Principal2}
                height={'600'}
                style={{position: 'absolute', top: 0, left: 0, opacity: 0.4, width: '100%' }}
                />
            <Container className={classes.titulo} >
                <Transition mounted={showText} transition="slide-up" duration={400} timingFunction="ease">
                    {(styles) => (
                        <Text align="center" style={styles}>
                        <h2 style={{fontSize:60, margin:0}}>CASA DE DESCANSO</h2>
                        </Text>
                    )}
                   
                </Transition>

                <Transition mounted={showText2} transition="slide-left" duration={400} timingFunction="ease">
                    {(styles) => (
                        <Text align="center" style={styles}>
                        <h2 style={{fontSize:40}}>Casona Alfa</h2>
                        </Text>
                    )}
                   
                </Transition>
                
            </Container>

        
        </div>
    );
}

export default Carrousel;
