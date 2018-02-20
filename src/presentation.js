// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  MarkdownSlides,
} from 'spectacle';

import './index.css'

// Import theme
import createTheme from 'spectacle/lib/themes/default';
import SlideCoinTossSmallSample from './SlideCoinTossSmallSample'
import SlideCoinTossLargeSample from './SlideCoinTossLargeSample'
import SlideCoinTrial from './SlideCoinTrial'
import SlideNormalDistribution from './SlideNormalDistribution'
import SlideNormalDistributionMeanStd from './SlideNormalDistributionMeanStd'
import SlideHypothesisTesting from './SlideHypothesisTesting'
import SlideConfidenceInterval from './SlideConfidenceInterval'
import SlideSignificance from './SlideSignificance'
import SlideSignificanceFormula from './SlideSignificanceFormula'
import SlideABAdvantage from './SlideABAdvantages'
import SlideObama from './SlideObama'
import SlideObama2 from './SlideObama2'
import SlideObamaButton from './SlideObamaButtons'
import SlideObamaButtonResult from './SlideObamaButtonResult'
import SlideObamaInvolvedImage from './SlideObamaInvolvedImage'
import SlideObamaChangeImage from './SlideObamaChangeImage'
import SlideObamaChangeImage2 from './SlideObamaChangeImage2'
import SlideObamaSamsVideo from './SlideObamaSamsVideo'
import SlideABTest from './SlideABTest'

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quartenary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  },
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={ ['zoom', 'slide'] }
        transitionDuration={ 0 }
        theme={ theme }
      >
        { MarkdownSlides`
            # The ABCs of  A/B TESTING
         ` }
        { MarkdownSlides`
            ## AGENDA
   - Controlled experimentaion
   - Run through a real-world example
   - The statistics behind hypothesis testing
   - Getting started with A/B today
          ` }

        { MarkdownSlides`
            ## A/B TESTING
   - Split traffic between two (or more) versions - **Control Variant** & **Treatment Variants**
   - Collect metrics of interest from real users
   - Analyze the results
          ` }
        <Slide transition={ ['zoom'] } bgColor="primary">
          <SlideABAdvantage />
        </Slide>
        { MarkdownSlides`
# Real world A/B Experiments
        ` }
        <Slide>
          <SlideObama />
        </Slide>
        <Slide>
          <SlideObama2 />
        </Slide>
        <Slide>
          <SlideObamaChangeImage />
        </Slide>
        <Slide>
          <SlideObamaChangeImage2 />
        </Slide>
        <Slide>
          <SlideObamaInvolvedImage />
        </Slide>
        <Slide>
          <SlideObamaSamsVideo />
        </Slide>

        <Slide>
          <SlideObamaButton />
        </Slide>
        <Slide>
          <SlideObamaButtonResult />
        </Slide>
        { MarkdownSlides`
            #### DATA  TRUMPS INTUITION
- Features are built because teams believe they are useful.
- But most experiments show that features fail to move the metrics they were
designed to improve.
          ` }
        <Slide transition={ ['zoom'] } bgColor="primary">
          <SlideCoinTrial />
        </Slide>
        <Slide transition={ ['zoom'] } bgColor="primary">
          <SlideCoinTossSmallSample />
        </Slide>

        <Slide transition={ ['zoom'] } bgColor="primary">
          <SlideCoinTossLargeSample />
        </Slide>

        <Slide transition={ ['zoom'] } bgColor="primary">
          <SlideNormalDistribution />
        </Slide>

        <Slide transition={ ['zoom'] } bgColor="primary">
          <SlideNormalDistributionMeanStd />
        </Slide>

        <Slide transition={ ['zoom'] } bgColor="primary">
          <SlideHypothesisTesting />
        </Slide>

        <Slide transition={ ['zoom'] } bgColor="primary">
          <SlideConfidenceInterval />
        </Slide>

        <Slide transition={ ['zoom'] } bgColor="primary">
          <SlideSignificanceFormula />
        </Slide>

        <Slide transition={ ['zoom'] } bgColor="primary">
          <SlideSignificance />
        </Slide>
        <Slide transition={ ['zoom'] } bgColor="primary">
          <SlideABTest />
        </Slide>

        { MarkdownSlides`
# A/B Testing workflow
        ` }

        { MarkdownSlides`
#### Step 0:
## Form a hypothesis
        ` }

        { MarkdownSlides`
#### Step 1:
## Define measurable & quantifiable metrics
        ` }

        { MarkdownSlides`
#### Step 2:
## Find the right sample size
- Depends on
    * The existing conversion rate
    * Minimum detectable difference
        ` }
        { MarkdownSlides`
#### Step 3:
## Setup the test
  - Create an experiment in Google Analytics
  - Codify the experiment business logic
        ` }
        { MarkdownSlides`
#### Step 4:
## Get, Set, Go
        ` }
        { MarkdownSlides`
#### Step 4:
### Stop and analyze results
  - Make sure you have enough sample size to conclude the experiment
  - Use client config to switch experiment state on / off
  - Calculate the "p value" for each metric, see if it is signinificant (p < 0.05)
        ` }
        { MarkdownSlides`
#### Step 5:
## Publish the results & teardown
  - Remove the business logic, divert all traffic to the winning variant (if any)
        ` }

        { MarkdownSlides`
## Useful links


 [Sample size calculator](https://www.abtasty.com/sample-size-calculator/)

 [p-value calculator](https://abtestguide.com/calc/)

 [Evan Millers' A/B Tools](https://www.evanmiller.org/ab-testing/)

        ` }
      </Deck>
    );
  }
}
