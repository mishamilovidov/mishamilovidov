import { createMuiTheme } from '@material-ui/core/styles';

export const theme = (function(){
  let theme = createMuiTheme({
    typography: {
      useNextVariants: true,
    },
    palette: {
      primary: {
        main: '#696969',
      },
      secondary: {
        main: '#ec423d',
      },
      text: {
        primary: '#696969',
        white: '#ffffff',
      },
    },
  });

  return theme;
})();
