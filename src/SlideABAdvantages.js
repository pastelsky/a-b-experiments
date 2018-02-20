import React, { Component } from 'react'
import {
  Heading,
  Slide,
  Text,
  ListItem,
  List,
  S
} from 'spectacle';
import { TimelineMax, TweenMax, Back } from "gsap";

export default class SlideABAdvantage extends Component {
  componentDidMount() {
    new TimelineMax()
      .from('.coin-toss-normal', 0.5, { opacity: 0 })
  }

  render() {
    return (
      <div hasSlideChildren>
        <Heading size={ 4 } caps lineHeight={ 1 } textColor="secondary">
          Advantages of A/B Testing
        </Heading>

        <List margin="8vh 0 0 0">
          <ListItem   textSize={ 30} >
            Controlled experiments test for <span style={{ color: "#76bec4" }}><b>causal</b></span> relationships, not
            simply <span style={{ color: "#76bec4" }}><b>correlations</b></span>.
          </ListItem>
          <ListItem  margin="5vh 0 0 0" textSize={ 30}>
            When the variants are correctly setup, only two things could explain a change in metrics
            -
            <List ordered  margin="5vh 0 0 5vh">
              <ListItem  textSize={ 26}>
                The “feature(s)” (A vs. B)
              </ListItem>
              <ListItem  margin="3vh 0 0 0" textSize={ 26}>
                Random chance - Can be avoided using statistical significance
              </ListItem>
            </List>
          </ListItem>
          <ListItem  textSize={ 30} >
            Can be used to test the waters - a <span style={{ color: "#76bec4" }}><b>phased rollout</b></span> mechanism
          </ListItem>
          <ListItem textSize={ 35}>
            Try radical ideas. You may be surprised.
          </ListItem>
        </List>
      </div>
    )
  }
}