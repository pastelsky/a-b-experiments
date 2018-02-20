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
          Hypothesis testing
        </Heading>
        <Text textSize={ 45 } textColor="#83D9E1" margin="10vh 0 0 0">
          <b>Claim:</b> A buttered toast always falls butter side down.
        </Text>

        <List ordered>
          <ListItem textSize={ 35 } bold={ true }>
            Null Hypothesis ( H<sub>0</sub>) —
            <Text textColor="#777" textSize={ 35 } bold={ false }>
              The probability that a toast falls on any side is 0.5
            </Text>
          </ListItem>
          <ListItem margin="20px 0" textSize={ 35 } bold={ true }>
            Alternate hypothesis (H<sub>a</sub>) —
            <Text textColor="#777" textSize={ 35 } bold={ false }>
              The probability that a buttered toast falls on
              butter side down is 1
            </Text>
          </ListItem>
        </List>
      </div>
    )
  }
}