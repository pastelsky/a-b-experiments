import React, { Component } from 'react'
import {
  Heading,
  Text,
  Slide,
  Image,
} from 'spectacle';
import { TweenMax } from "gsap";
import CoinSrc from './assets/coin.svg'

export default class SlideCoinToss extends Component {
  componentDidMount() {
    TweenMax.to('rect', 4, {
      attr: { height: 300 }, repeat: -1, yoyo: true, transformOrigin: '50% 0%',
    }, 0.1)
  }

  render() {
    return (
      <div hasSlideChildren>
        <Heading size={ 4 } caps lineHeight={ 1 } textColor="secondary">
          Heads, or tails?
        </Heading>
        <Text textColor="#97E0E7">Toss a coin 10 times</Text>
        <Image margin="10vh auto" width={ 200 } src={ CoinSrc } />
      </div>
    )
  }
}