import React, { Component } from 'react'
import {
  Heading,
  Slide,
  Text,
  ListItem,
  List,
  Image,
  S,
} from 'spectacle';
import { TimelineMax, TweenMax, Back } from "gsap";
import ObamaSrc from './assets/obama-homepage.png'

export default class SlideObama extends Component {
  render() {
    return (
      <div hasSlideChildren>
        <Heading size={ 5 } caps lineHeight={ 1 } textColor="secondary">
          The Obama Campaign, 2008
        </Heading>
        <Image src={ ObamaSrc } />
      </div>
    )
  }
}