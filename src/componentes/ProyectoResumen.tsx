import { createStyles, Image, rem, Text, Transition } from "@mantine/core";
import Proyecto2 from "../assets/proyecto2.webp";
import { useEffect, useState } from "react";

const useStyles = createStyles((theme) => ({
  inner: {
    backgroundColor: "#6BC2B4",
    width: "100%",
    marginTop: "30px",
    height: "auto",

    position: "relative",
  },
  spaceContent: {
    paddingTop: "15rem",
    paddingBottom: "8rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.fn.smallerThan("xl")]: {
      paddingTop: rem(135),
      flexDirection: "column",
      alignItems: "center",
      gap: rem(10),
    },
  },

  innerContent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    fontFamily: "Roboto",
  },
  textoTitulo: {
    color: "white",
    textShadow:
      "2px 2px 0px #5EA89C, -1px -1px 0px #5EA89C, -1px 1px 0px #5EA89C, 1px -1px 0px #5EA89C",
  },

  texto: {
    width: "45%",
    fontWeight: 400,
    fontSize: "20px",
    [theme.fn.smallerThan("xl")]: {
      width: "100%",
      fontSize: "30px",
    },
  },
  wave: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    overflow: "hidden",
    lineHeight: 0,
  },
}));

const ProyectoResumen = () => {
  const { classes } = useStyles();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calcula la posición del div en la ventana
      const div = document.getElementById("miDiv");
      const divTop = div?.getBoundingClientRect().top;

      // Comprueba si el div está visible en la ventana
      if (divTop) {
        console.log(divTop);
        console.log(window.innerHeight);
        const isVisible = divTop < window.innerHeight;
        setIsVisible(isVisible);
      }
    };

    // Agrega un event listener al evento de scroll
    window.addEventListener("scroll", handleScroll);

    // Limpia el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={classes.inner}>
        <div className="custom-shape-divider-top-1681352320">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <div id="miDiv">
          <div className={classes.spaceContent}>
            <Transition
              mounted={isVisible}
              transition="slide-up"
              duration={5000}
              timingFunction="ease"
            >
              {(styles) => (
                <div className={classes.innerContent} style={styles}>
                  <Image
                    width={450}
                    height="auto"
                    src={Proyecto2}
                    style={{ border: "5px solid #ffff" }}
                  />
                </div>
              )}
            </Transition>
            <Transition
              mounted={isVisible}
              transition="slide-right"
              duration={5500}
              timingFunction="ease"
            >
              {(styles) => (
                
                  <div
                    className={classes.innerContent}
                    style={{ flexDirection: "column" }}
                    
                  >
                    <h1
                      className={classes.textoTitulo}
                      style={{ textAlign: "center" }}
                    >
                    <div style={styles}>
                      NUESTRO PROYECTO
                    </div>
                    </h1>
                    <Text align="justify" className={classes.texto}>
                      <div style={styles}>
                        {" "}
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Laborum recusandae sapiente nisi, quisquam quasi,
                        voluptate eligendi nulla nobis culpa est eum
                        voluptatibus dignissimos vitae esse in dolores,
                        temporibus adipisci officia.{" "}
                      </div>
                    </Text>
                  </div>
               
              )}
            </Transition>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProyectoResumen;
