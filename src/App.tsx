
import "./style.scss";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import LargeSection from "components/LargeSection";
import { DataProvider } from "hooks/useLoader";
import MediumSection from "components/MediumSection";
import { ThemeProvider } from "context/ThemeContext";
import ThemeSwitcher from "components/themeButton/ThemeSwitcher";
import Layout from "components/layout/Layout";

const useStyles = makeStyles(theme => ({

  root: {
    display: 'flex',
    width : '100%',
    padding: theme.spacing(5),
    [theme.breakpoints.only('xl')]: {
      flexDirection: 'row',
    },
    [theme.breakpoints.only('lg')]: {
      flexDirection: 'row',
    },
    [theme.breakpoints.only('md')]: {
      flexDirection: 'column',
    },
    [theme.breakpoints.only('sm')]: {
      flexDirection: 'column',
    },
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  section: {
    flex : 1,
    display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
    [theme.breakpoints.only('xl')]: {
      flexDirection: 'row',

    },
    [theme.breakpoints.only('lg')]: {
      flexDirection: 'row',
    },
    [theme.breakpoints.only('md')]: {
      flexDirection: 'column',
    },
    [theme.breakpoints.only('sm')]: {
      flexDirection: 'column',
    },
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
}));

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider>
      <DataProvider>
        <Layout>
          <ThemeSwitcher/>
          <Grid className={classes.root} style={{ display: 'flex', justifyContent: 'space-between' }}  container spacing={3} >
            <Grid item className={classes.section}>
              <LargeSection/>
            </Grid>
            <Grid item className={classes.section}>
              <MediumSection/>
            </Grid>
          </Grid>
        </Layout>
      </DataProvider>
    </ThemeProvider>
  );
}

export default App;
