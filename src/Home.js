import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    imgPath:
      'https://i1.wp.com/www.25ncoworking.com/wp-content/uploads/2019/01/Frisco-Coworking-Spaces.png?fit=1742%2C1276&ssl=1',
  },
  {
    imgPath:
      'https://www.kcrw.com/culture/shows/design-and-architecture/coworking-after-wework-autographs-of-la/what-weworks-implosion-means-for-other-coworking-spaces/@@images/aa8074c4-d118-47a3-96e0-505bd1d25773.jpeg', 
  },
  {
    imgPath: 'https://cdn01.vulcanpost.com/wp-uploads/2019/08/jreast.jpg',
  },

  {
    imgPath:
      'https://sharedspace.work/wp-content/uploads/2019/04/iStock-973266164-1920x1080.jpg',
  },
];

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 1400,
    flexGrow: 1,
  
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.palette.background.default,
    marginTop: -15,
  },
  img: {
    height: 500,
    display: 'block',
    maxWidth: 1400,
    overflow: 'hidden',
    width: '100%',
  },
}));

function Home() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleStepChange = step => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        <Typography>{tutorialSteps[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={step.imgPath} alt={step.label} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
    </div>
  );
}

export default Home;
