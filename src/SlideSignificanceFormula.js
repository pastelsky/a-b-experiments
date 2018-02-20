import React, { Component } from 'react'
import {
  Heading,
  Slide,
  Text,
  List,
  ListItem,
  Image,
} from 'spectacle';
import { TimelineMax, TweenMax, Back } from "gsap";
import styled from 'styled-components';
import pFormulaSrc from './assets/alpha.png'

export default class SlideHypothesisTesting extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <div hasSlideChildren>
        <Heading size={ 4 } caps lineHeight={ 1 } textColor="secondary">
          Significance
        </Heading>
        <Text>
          (alpha value)
        </Text>
        <Image margin="40px auto" src={ pFormulaSrc } />
      </div>
    )
  }
}