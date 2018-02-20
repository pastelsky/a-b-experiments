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
import ObamaSrc from './assets/campaign-logo.png'

export default class SlideObama extends Component {
  render() {
    return (
      <div hasSlideChildren>
        <Heading size={ 5 } caps lineHeight={ 1 } textColor="secondary">
          The Obama Campaign, 2008
        </Heading>
        <Image src={ ObamaSrc } height={ 200 } margin="20px auto auto auto"/>
        <Text textColor="#83D9E1" margin={ 40 }>
          → Website → Email Signup → Raise Money
        </Text>

        <Text textSize={ 36 } margin={ 40 }>
          The Obama campaign organisers experimented with various choices in order to
          raise more money for the Presedential Campaign
        </Text>

      </div>
    )
  }
}