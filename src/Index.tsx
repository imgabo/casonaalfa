import { Component, useState } from "react";
import Header  from "./componentes/Header";
import { ColorPicker, Text, Stack, Container, createStyles, AppShell } from '@mantine/core';
import HeaderBar from "./componentes/Header";
import Carrousel from "./componentes/Carrousel";
import Objetivo from "./componentes/Objetivo";
import QuienesSomos from "./componentes/QuienesSomos";
import ProyectoResumen from "./componentes/ProyectoResumen";

const useStyles = createStyles((theme) => ({
    wrapper: {
        width: '100%',
        height: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
}));


function Index(){
   
    const { classes } = useStyles();
    const links = [{link: "./about", label: "Inicio", links:[]},
    {link: "./about", label: "Nosotros", links:[]},
    {link: "./about", label: "Proyectos", links:[]},
    {link: "./about", label: "Equipo", links:[]},

   
   ];

    return (
        <>
            <HeaderBar links={links} />
            <div className={classes.wrapper}>
                <Carrousel/>
                <Objetivo />
                <QuienesSomos/>
                
                <ProyectoResumen/>
            </div>
     
        </>

    );
}

export default Index;