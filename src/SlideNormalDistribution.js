import React, { Component } from 'react'
import {
  Heading,
  Slide,
  Text,
} from 'spectacle';
import { TimelineMax, TweenMax, Back } from "gsap";
import styled from 'styled-components';

const SvgNormal = styled.svg`
  height: 75vh;
  width: 60vw;
  overflow: visible;
  margin: 3vh auto 0 auto;
`
export default class SlideNormalDistribution extends Component {
  componentDidMount(){
    new TimelineMax()
      .from('.coin-toss-normal', 0.5, { opacity: 0 })
  }

  render() {
    return (
      <div hasSlideChildren>
        <Heading size={4} caps lineHeight={1} textColor="secondary">
          Normal Distribution
        </Heading>
        <SvgNormal width="265" height="108" viewBox="0 0 265 108" xmlns="http://www.w3.org/2000/svg">
          <path d="M-1 108c25.59.54 47.92-9.87 66.99-31.24C94.59 44.72 108.83-.1 129.32 0c20.49.11 42.52 45.61 65.02 76.76 15.01 20.77 38.47 31.18 70.37 31.24H-1z" fill="#BFE8EC" fill-rule="evenodd"/>
        </SvgNormal>
      </div>
    )
  }
}