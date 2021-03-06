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
import ObamaSrc from './assets/obama-button.png'

export default class SlideObama extends Component {
  render() {
    return (
      <div hasSlideChildren>
        <Heading size={ 5 } caps lineHeight={ 1 } textColor="secondary">
          Sign up button CTA
        </Heading>
        <Image src={ ObamaSrc } width={ 300 } />
      </div>
    )
  }
}