import { createMuiTheme } from "@material-ui/core/styles";
import pink from "@material-ui/core/colors/pink";

const darkPink = pink[600];
const darkestPink = pink[800];

const theme = createMuiTheme({
  typography: {
    // Tell Material-UI what's the font-size on the html element is.
    htmlFontSize: 10,
  },
  palette: {
    primary: {
      main: darkPink,
    },
    secondary: {
      main: darkestPink,
    },
  },
});

export default theme;
