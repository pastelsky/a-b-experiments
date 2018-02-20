import React, { Component } from 'react'
import {
  Heading,
  Slide,
  Text,
} from 'spectacle';
import { TimelineMax, TweenMax, Back } from "gsap";
import styled from 'styled-components';

const Svg = styled.svg`
  height: 75vh;
  width: 60vw;
  overflow: visible;
  margin-top: 1.6vh;
`

export default class SlideNormalDistributionMeanStd extends Component {
  componentDidMount(){
    new TimelineMax()
      .from('.mean-marker-line', 0.5, { scaleY: 0, transformOrigin: '50% 0%' })
      .from(['.mean-marker-text'], 0.5, { opacity: 0 }, '-=0.2')
      .from('.std-marker-line', 0.5, { scaleX: 0, transformOrigin: '50% 50%' })
      .from(['.std-marker-text'], 0.5, { opacity: 0 }, '-=0.2')
  }

  render() {
    return (
      <div hasSlideChildren>
        <Heading size={4} caps lineHeight={1} textColor="secondary">
          Normal Distribution
        </Heading>

        <Svg xmlns="http://www.w3.org/2000/svg" width="265" height="159" viewBox="0 0 265 159">
          <g fill="none" fillRule="evenodd">
            <path fill="#BFE8EC" d="M-1 136c25.59.54 47.92-9.87 66.99-31.24C94.59 72.72 108.83 27.9 129.32 28c20.49.11 42.52 45.61 65.02 76.76 15.01 20.77 38.47 31.18 70.37 31.24H-1z"/>
            <path className="mean-marker-line" stroke="#7BB3B8" strokeDasharray="2 1" d="M128.79 16.26v119.71"/>
            <text className="mean-marker-text" fill="#004C69" fontFamily="SFUIText-Medium, SF UI Text" fontSize="10" fontWeight="400" letterSpacing=".5" transform="translate(-1 -2)">
              <tspan x="107.04" y="10">Mean - μ</tspan>
            </text>
            <text className="std-marker-text" fill="#004C69" fontFamily="SFUIText-Medium, SF UI Text" fontSize="10" fontWeight="400" letterSpacing=".5" transform="translate(-1 -2)">
              <tspan x="67.62" y="160">Standard Deviation - σ</tspan>
            </text>
            <path className="std-marker-line" stroke="#7BB3B8" d="M14.99 144.82h231.17m-231.17-3v6m231.17-6v6"/>
          </g>
        </Svg>
      </div>
    )
  }
}