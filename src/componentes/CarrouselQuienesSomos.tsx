import { createStyles, Image } from "@mantine/core";
import { Carousel } from "@mantine/carousel";

import Imagen1 from "../assets/CarrouselQuienesSomos/imagen1.webp";
import Imagen2 from "../assets/CarrouselQuienesSomos/imagen2.webp";
import Imagen3 from "../assets/CarrouselQuienesSomos/imagen3.webp";
import Imagen4 from "../assets/CarrouselQuienesSomos/imagen4.webp";
import Imagen5 from "../assets/CarrouselQuienesSomos/imagen5.webp";
import Imagen6 from "../assets/CarrouselQuienesSomos/imagen6.webp";
import Imagen7 from "../assets/CarrouselQuienesSomos/imagen7.webp";
import Imagen8 from "../assets/CarrouselQuienesSomos/imagen8.webp";
import Imagen9 from "../assets/CarrouselQuienesSomos/imagen9.webp";

const useStyles = createStyles((theme) => ({
  border: {
    border: "5px solid #6BC2B4",
  },
}));

const CarrouselQuienesSomos = () => {
  const { classes } = useStyles();
  return (
    <>
     

      <Carousel loop maw={250}  align="start"  withControls={false} withIndicators height='auto' className={classes.border}>
            <Carousel.Slide> <Image width={250} height={350} src={Imagen1} /></Carousel.Slide>
            <Carousel.Slide><Image width={250} height={350} src={Imagen2} /></Carousel.Slide>
            <Carousel.Slide><Image width={250} height={350} src={Imagen3} /></Carousel.Slide>
            <Carousel.Slide><Image width={250} height={350} src={Imagen4} /></Carousel.Slide>
            <Carousel.Slide><Image width={250} height={350} src={Imagen5} /></Carousel.Slide>
            <Carousel.Slide><Image width={250} height={350} src={Imagen6} /></Carousel.Slide>
            <Carousel.Slide><Image width={250} height={350} src={Imagen7} /></Carousel.Slide>
            <Carousel.Slide><Image width={250} height={350} src={Imagen8} /></Carousel.Slide>
  
        </Carousel>
    </>
  );
};

export default CarrouselQuienesSomos;
