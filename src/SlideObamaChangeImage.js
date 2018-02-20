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
import ObamaSrc from './assets/obama-change.gif'

export default class SlideObama extends Component {
  render() {
    return (
      <div hasSlideChildren>
        <Heading size={ 5 } caps lineHeight={ 1 } textColor="secondary">
          "Family" Image
        </Heading>
        <Image src={ ObamaSrc } width={ 700 } />
      </div>
    )
  }
}