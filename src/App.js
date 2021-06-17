/** @format */

import ApplicationBar from './Components/appBar/AppBar';
import Description from './Components/description/Description';
import AppInfo from './Components/appInfo/AppInfo';
import About from './Components/about/About';
import SummaryCards from './Components/summaryCards/SummaryCards';
import Reviews from './Components/reviews/Reviews';
import Faq from './Components/faq/Faq';
import useStyles from './appStyles';

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ApplicationBar className={classes.appbar} />
      <div className={classes.firstSection}>
        <Description />
        <AppInfo />
      </div>

      <div className={classes.aboutSection}>
        <About />
      </div>

      <div className={classes.thirdSection}>
        <SummaryCards />
      </div>

      <div className={classes.reviewsSection}>
        <Reviews />
      </div>
      <div className={classes.questionsSection}>
        <Faq />
      </div>
    </div>
  );
}

export default App;
