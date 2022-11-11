import deepPurple from "@material-ui/core/colors/deepPurple";
import indigo from "@material-ui/core/colors/indigo";

export const colors = {
    background: {
        primary: `linear-gradient(45deg, ${ deepPurple[900] } 30%, ${ indigo[400] } 90%)`,
        secondary: `linear-gradient(90deg, ${ deepPurple[900] } 30%, ${ indigo[700] } 90%)`,
    },
    text: {
        primary: '#fff',
    }
}

export default colors;
