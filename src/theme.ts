import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config : ThemeConfig = {
 initialColorMode:'dark',
};

const theme = extendTheme({config,colors:{
    gray:{
        100:"#f9f9f9",
        200:"#ededed",
        300:"#d3d3d3",
        400:"#b3b3b3",
        500:"#a0a0a0",
        600:"#898989",
        700:"#6c6c6c",
        800:"#202020",
        900:"#111"

    }
}});
 export default theme;