import { createStyles, Text } from "@mantine/core";

const useStyles = createStyles((theme) => ({
    inner : {
        backgroundColor:'rgba(234, 234, 234, 0.8)',
        width:'100%',
        height:'300px',
        display:'flex',
        justifyContent:'center',
        overflow:'hidden',
        position:'relative'
    },
    texto: {
        fontFamily:'Roboto',
        fontWeight:500,
        height:'100%',
        fontSize:20,
     
        width:'56%',
        position:'absolute',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
        
    },
    textSub:{
        color:'#408378',
        fontWeight:'bold'
    }
}));

const Objetivo = () =>{
    const { classes } = useStyles();
    return (
        <div className={classes.inner} >
            <Text align="justify" className={classes.texto}>
                <div><span className={classes.textSub}>Desarrollar</span> un proyecto de innovación social para crear casas de reposo <span className={classes.textSub}>sin fines de lucro </span>para adultos mayores buscando las herramientas necesarias para  que se puedan autofinanciar con sus propios recursos, subvenciones del estado y activar una actividad comercial de acuerdo a sus propias capacidades. </div>
            </Text>
        </div>
    );
}

export default Objetivo;