import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Crd from '../../components/Crd'
import PasswordImg from '../../img/password.PNG'
import CodeBookImg from '../../img/codebook.PNG'
import CovidInformaImg from '../../img/COVIDINFORMA.PNG'
import WeatherDashboardImg from '../../img/weatherDashboard.PNG'
import FitnessImg from '../../img/fitness.png'
import WorkDayImg from '../../img/WorkDay.PNG'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 15,
    minWidth: 375
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const portfolioInfo = [
  {
    img: CodeBookImg,
    name: 'CodeBook',
    description: 'A simple app to help you keep track of all your coding accomplishments. CodeBook allows you to share your coding journey with classmates.',
    link: 'https://radiant-headland-26253.herokuapp.com/index.html',
    github: 'https://github.com/Greg-Sam/Project2',
    cardType: 'grey'
  },
  {
    img: CovidInformaImg,
    name: 'COVID Informa',
    description: 'Interactive map providing data visualization of realtime COVID 19 statistics. Made use of mapbox, apis, html, css and materialize.',
    link: 'https://nicouva.github.io/Project1-COVID19-Map/#',
    github: 'https://github.com/nicouva/Project1-COVID19-Map',
    cardType: 'maroon'
  },
  {
    img: WeatherDashboardImg,
    name: 'Weather Dashboard',
    description: 'Searchable weather dashboard that provides current conditions and a five day forecast for cities around the world.',
    link: 'https://greg-sam.github.io/Weather-Dashboard/',
    github: 'https://github.com/Greg-Sam/Weather-Dashboard',
    cardType: 'grey'
  },
  {
    img: PasswordImg,
    name: 'Password Generator',
    description: 'This app receives user input and generates a strong password to meet their specifications',
    link: 'https://greg-sam.github.io/pw_gen/',
    github: 'https://github.com/Greg-Sam/pw_gen',
    cardType: 'white'
  },
  {
    img: FitnessImg,
    name: 'Fitness Tracker',
    description: 'This fitness app allows you to view, create and track daily workouts. You can log multiple exercises in a workout on a given day. You can also track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, you can track your distance traveled.',
    link: 'https://intense-anchorage-28961.herokuapp.com/',
    github: 'https://github.com/Greg-Sam/fitness-tracker',
    cardType: 'grey'
  },
  {
    img: WorkDayImg,
    name: 'Day Planner',
    description: 'This day planner is for keeping track of your schedule on a busy work day. The time blocks change based on current hour, previous hours and future hours.',
    link: 'https://greg-sam.github.io/Day-Planner/',
    github: 'https://github.com/Greg-Sam/Day-Planner',
    cardType: 'maroon'
  }
]


const Portfolio = () => {

  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };


  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {portfolioInfo.map((data, i) => (
            <Grid key={i} item>
              <Crd
                img={data.img}
                name={data.name}
                description={data.description}
                link={data.link}
                github={data.github}
                cardType={data.cardType}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
      </Container>
    </React.Fragment>

    // <>
    //   <h1>Portfolio Page</h1>


    //   {
    //     portfolioInfo.map((data, i) =>
    //       <Crd
    //         img={data.img}
    //         name={data.name}
    //         text={data.description}
    //         link={data.link}
    //         github={data.github}
    //         cardType={data.cardType}
    //       />)
    //   }
    //   </>
  )
}

export default Portfolio