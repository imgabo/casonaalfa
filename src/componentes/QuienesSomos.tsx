import { createStyles, rem, Text } from "@mantine/core";
import CarrouselQuienesSomos from "./CarrouselQuienesSomos";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "30px",
    gap: 0,
  },
  linear: {
    display: "block",
    margin: 30,

    borderStyle: "inset",
    borderWidth: "1px",
    height: "1px",
    width: "34%",
    border: "none",
    borderRadius: "6px",
    background:
      "linear-gradient(90deg, rgba(255, 255, 255, 1) 0%,  rgba(237, 232, 234, 0.4) 21%, rgba(39, 39, 39, 1) 51%,rgba(0, 0, 0, 1) 100%)",
  },
  linear2: {
    display: "block",
    margin: 30,

    borderStyle: "inset",
    borderWidth: "1px",
    height: "1px",
    width: "34%",
    border: "none",
    borderRadius: "6px",
    background:
      "linear-gradient(90deg, rgba(0, 0, 0, 1) 0%,rgba(39, 39, 39, 1) 31%,rgba(237, 232, 234, 0.4) 61%,rgba(255, 255, 255, 1) 100%)",
  },
  Titulo: {
    fontFamily: "Roboto",
    fontSize: "45px",
    fontWeight: 500,
    textAlign: "center",
    margin: 0,
    color: "#5EA89C",
  },
  somos: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "30px",
    height: "300px",
    gap: 0,
  },
  somosContentTexto: {
    display: "flex",
    [theme.fn.smallerThan("xl")]: {
      flexDirection: "column",
      alignItems: "center",
      gap: rem(50),
    },
    [theme.fn.largerThan("sm")]: {
      alignItems: "space-between",
    },

    justifyContent: "center",

    marginTop: "30px",

    gap: rem(170),
  },
  textoSomos: {
    width: "52%",
    [theme.fn.smallerThan("md")]: {
      width: "90%",
    },
    fontFamily: "Roboto",
    textAlign: "justify",

    fontWeight: 400,
  },
}));

const QuienesSomos = () => {
  const { classes } = useStyles();
  return (
    <>
      <div className={classes.inner}>
        <hr className={classes.linear} />
        <Text className={classes.Titulo}>¿QUIÉNES SOMOS?</Text>
        <hr className={classes.linear2} />
      </div>

      <div className={classes.somosContentTexto}>
        <CarrouselQuienesSomos />
        <Text className={classes.textoSomos}>
          <h1 style={{ textAlign: "center" }}>
            UNION DE GRUMETES INFANTES DE MARINA 1978 ( UGCIM78 )
          </h1>
          Somos una asociación sin fines de lucro creada el año 2019 cuyos
          fines, forma y medios para cumplir sus tareas están definidas en sus
          estatutos y ha adquirido su personalidad jurídica para comenzar a
          operar desde el 12 de diciembre del 2019, desde el mes de marzo del
          año 2020 trabajamos en la planificación y puesta en marcha de nuestro
          proyecto, esta organización cuenta con su gran motivación de crear
          nuestra propia CASA DE REPOSO SOCIAL, levantada con recursos propios,
          privados , proyectos concursantes y del estado Chileno. Esta
          iniciativa fue creada en el seno de nuestra promoción observando lo
          que sucede con la sociedad actual con los adultos mayores, quienes
          pasan a ser relegados como ciudadanos de segunda categoría, sin
          proyectos públicos y dejando en pleno abandono al llegar a la tercera
          y cuarta edad en su soledad infinita. Buscamos tener una vejes DIGNA,
          donde reine la paz, armonía, alegría, la sociabilidad con tus pares y
          no vivir la pandemia de la soledad y abandono.
        </Text>
      </div>
     
    </>
  );
};

export default QuienesSomos;
