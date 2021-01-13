import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles((theme) => ({

  root: {
    minWidth: 375,
    '& > *': {
      margin: theme.spacing(1),
      // width: '25ch',
    },
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 18,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: 300,
  }
}));

const Contact = () => {

  const classes = useStyles();

  return (
    <>

      <CssBaseline />
      <Container maxWidth="sm">
        <Card className={classes.root}>
          <CardContent>
            <Typography variant="h2" component="h2">
              Contact Greg
        </Typography>
            <Typography className={classes.title} gutterBottom>
              <MailOutlineIcon /> grssam@gmail.com
              </Typography>
            <Typography className={classes.title} gutterBottom>
              <Link href="https://twitter.com/_GregSam" >
                <TwitterIcon /> _gregsam
                </Link>
            </Typography>
            <Typography className={classes.title} gutterBottom>
              <Link href="https://github.com/Greg-Sam" >
                <GitHubIcon /> Greg-Sam
             </Link>
            </Typography>
            <Typography className={classes.title} gutterBottom>
              <Link href="https://www.linkedin.com/in/greg-samuelson" >
                <LinkedInIcon /> linkedin.com/in/greg-samuelson
      </Link>

            </Typography>

            <Typography variant="h4" component="h2">
              Complete this form
        </Typography>
          </CardContent>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField id="standard-basic" label="name" />
            <TextField id="standard-basic" label="email" />
            <TextField id="messageText" label="message" multiline rows={4} variant="outlined" fullWidth />
            <Button variant="contained" color="primary">
              Submit
</Button>
          </form>
        </Card>
      </Container>
    </>
  )
}

export default Contact