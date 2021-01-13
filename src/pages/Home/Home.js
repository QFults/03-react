import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MeImg from '../../img/me.jpg'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
  root: {
    minWidth: 375,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 18,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: 300,
  }
});

const Home = () => {

  const classes = useStyles();


  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Card className={classes.root}>
          <CardContent>
            <Typography variant="h2" component="h2">
              Greg Samuelson
        </Typography>
            <Typography className={classes.title} gutterBottom>
              phone: 657-342-7085
        </Typography>
            <Typography className={classes.title} gutterBottom>
              email: grssam@gmail.com
        </Typography>
            <Typography className={classes.title} gutterBottom>
              click to download my resume
        <CardMedia
                className={classes.media}
                image={MeImg}
              // title={props.title}
              />
            </Typography>

            <Typography variant="body1" component="p">
              Hi, I'm Greg and I am in the process of becoming a full stack developer thanks to the intensive bootcamp atthe University of California, Irvine.
              <br />
              <br />
              Being "in process" is exactly where I love to be. That's because one of my top values is growth and personal development. So far my life has been spent in pursuing that value and helping others do the same. From the incredibly rewarding work of starting and running a physical therapy center for kids with cerebral palsy in a poor neighborhood in Southern Morocco to coaching a volleyball team made up of guys from Eritrea who had never played the game before, my most rewarding moments have come from seeing someone do what they thought was impossible. I have been an educator my whole life, but more than that, I’ve been a learner. So becoming a developer is just the next step in life's process.
              <br />
              <br />
              My ability to take what I’ve learned in one domain and apply it someplace new is a strength of mine and it will make me a great asset to your team. Managing projects, running university campuses, learning languages, improving course delivery through technology, inventing games, solving problems, keeping budgets under control… these are just a few of the skills I bring with me into the world of coding.
              <br />
              <br />
              If you are looking for someone with all the front-end and back-end coding skills to make an impact on day one along with the life experience to make your dynamic team run smoothly, give me a call.
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </React.Fragment>

  )
}

export default Home