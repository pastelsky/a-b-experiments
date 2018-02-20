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
import ObamaSrc from './assets/sams-video.mp4'

export default class SlideObama extends Component {
  render() {
    return (
      <div hasSlideChildren>
        <Heading margin="20px" size={ 5 } caps lineHeight={ 1 } textColor="secondary">
          "Sam's" Video
        </Heading>
        <video  src={ ObamaSrc } width={ 900 } autoPlay={ true} controls/>
      </div>
    )
  }
}