import React, { Component } from 'react'
import {
  Heading,
  Slide,
  Text,
  List,
  ListItem,
} from 'spectacle';
import { TimelineMax, TweenMax, Back } from "gsap";
import styled from 'styled-components';

const SvgNormal = styled.svg`
  height: 75vh;
  width: 60vw;
  overflow: visible;
  margin: 3vh auto 0 auto;
`
export default class SlideHypothesisTesting extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <div hasSlideChildren>
        <Heading size={ 4 } caps lineHeight={ 1 } textColor="secondary">
          p value — (1-alpha)
        </Heading>
        <Text textSize={ 35 } textColor="#83D9E1" margin="5vh 0 0 0">
          The probability that the observed differences between variants was due to random chance.
        </Text>
        <List>
          <ListItem textSize={ 30 }>
            A small p-value (typically ≤ 0.05) — indicates strong evidence against the null hypothesis, so you reject the null hypothesis.
          </ListItem>
          <ListItem margin="20px 0" textSize={ 30 }>
            A large p-value (> 0.05) — indicates weak evidence against the null hypothesis, so you fail to reject the null hypothesis.
          </ListItem>
        </List>
      </div>
    )
  }
}