import React, { Component } from 'react'
import {
  Heading,
  Slide,
  Text,
  ListItem,
  List,
  Image,
  Markdown,
  S,
} from 'spectacle';
import { TimelineMax, TweenMax, Back } from "gsap";
import ObamaSrc from './assets/result.png'

export default class SlideObamaResult extends Component {
  render() {
    return (
      <div hasSlideChildren>
        <Heading size={ 5 } caps lineHeight={ 1 } textColor="secondary">
          Experiment Results
        </Heading>
        <Image margin="8vh" src={ ObamaSrc } width={ 800 } />
      </div>
    )
  }
}