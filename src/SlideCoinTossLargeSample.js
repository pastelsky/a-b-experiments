import React, { Component } from 'react'
import {
  Heading,
  Slide,
  Text,
} from 'spectacle';
import { TimelineMax, TweenMax, Back } from "gsap";
import styled from 'styled-components';

const Svg = styled.svg`
  height: 55vh;
  width: 60vw;
  overflow: visible;
  margin-top: 5vh;
`

export default class SlideCoinToss extends Component {
  componentDidMount(){
    const positionsFrom = [
      { height: 19 + 4, y: 160 - 4},
      { height: 42 -15, y: 137 + 15},
      { height: 79, y: 100},
      { height: 120 + 5, y: 59 - 5},
      { height: 152 -35, y:27 +35 },
      { height: 158, y: 21},
      { height: 152, y:27 },
      { height: 120 - 25, y: 59 + 25},
      { height: 79 + 5, y: 100 - 5 },
      { height: 42 + 5, y: 137 - 5},
      { height: 19, y: 160},
    ]

    const positionsTo = [
      { height: 19 , y: 160 },
      { height: 42 , y: 137 },
      { height: 79, y: 100},
      { height: 120 , y: 59 },
      { height: 152 , y:27 },
      { height: 158, y: 21},
      { height: 152, y:27 },
      { height: 120 , y: 59 },
      { height: 79 , y: 100 },
      { height: 42 , y: 137 },
      { height: 19, y: 160},
    ]
    Array.from(document.querySelectorAll('.coin-toss-graph rect'))
      .forEach((bar, index) => {
        TweenMax.set(bar, { attr: positionsFrom[index]})
        TweenMax.to(bar, 1, { attr: { ...positionsTo[index], fill: '#ACDBE0'}})
      })
  }

  render() {
    return (
      <div hasSlideChildren>
        <Heading size={4} caps lineHeight={1} textColor="secondary">
          Coin Toss Experiment
        </Heading>
        <Text textColor="#888">
          Large sample size
        </Text>
        <Svg className="coin-toss-graph" width="225" height="177" viewBox="0 0 225 177" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <rect fill="#BFE8EC" y="160" width="15" height="19"/>
            <rect fill="#BFE8EC" x="21" y="136.59" width="15" height="42.41"/>
            <rect fill="#BFE8EC" x="42" y="100" width="15" height="79"/>
            <rect fill="#BFE8EC" x="63" y="59" width="15" height="120"/>
            <rect fill="#BFE8EC" x="84" y="26.63" width="15" height="152.37"/>
            <rect fill="#BFE8EC" x="105" y="21" width="15" height="158"/>
            <rect fill="#BFE8EC" x="126" y="29" width="15" height="150"/>
            <rect fill="#BFE8EC" x="147" y="59" width="15" height="120"/>
            <rect fill="#BFE8EC" x="168" y="99" width="15" height="80"/>
            <rect fill="#BFE8EC" x="189" y="136.59" width="15" height="42.41"/>
            <rect fill="#BFE8EC" x="210" y="160" width="15" height="19"/>
            <text fontFamily="SFUIText-Medium, SF UI Text" fontSize="10" fontWeight="400" letterSpacing=".5" fill="#004C69" transform="translate(0 -2)">
              <tspan x="3.66" y="153">0</tspan>
            </text>
            <text fontFamily="SFUIText-Medium, SF UI Text" fontSize="10" fontWeight="400" letterSpacing=".5" fill="#004C69" transform="translate(0 -2)">
              <tspan x="24.54" y="126">1</tspan>
            </text>
            <text fontFamily="SFUIText-Medium, SF UI Text" fontSize="10" fontWeight="400" letterSpacing=".5" fill="#004C69" transform="translate(0 -2)">
              <tspan x="46.45" y="90">2</tspan>
            </text>
            <text fontFamily="SFUIText-Medium, SF UI Text" fontSize="10" fontWeight="400" letterSpacing=".5" fill="#004C69" transform="translate(0 -2)">
              <tspan x="66.58" y="50">3</tspan>
            </text>
            <text fontFamily="SFUIText-Medium, SF UI Text" fontSize="10" fontWeight="400" letterSpacing=".5" fill="#004C69" transform="translate(0 -2)">
              <tspan x="87.48" y="19">4</tspan>
            </text>
            <text fontFamily="SFUIText-Medium, SF UI Text" fontSize="10" fontWeight="400" letterSpacing=".5" fill="#004C69" transform="translate(0 -2)">
              <tspan x="109.84" y="10">5</tspan>
            </text>
            <text fontFamily="SFUIText-Medium, SF UI Text" fontSize="10" fontWeight="400" letterSpacing=".5" fill="#004C69" transform="translate(0 -2)">
              <tspan x="129.46" y="21">6</tspan>
            </text>
            <text fontFamily="SFUIText-Medium, SF UI Text" fontSize="10" fontWeight="400" letterSpacing=".5" fill="#004C69" transform="translate(0 -2)">
              <tspan x="151.48" y="52">7</tspan>
            </text>
            <text fontFamily="SFUIText-Medium, SF UI Text" fontSize="10" fontWeight="400" letterSpacing=".5" fill="#004C69" transform="translate(0 -2)">
              <tspan x="168.84" y="90">8</tspan>
            </text>
            <text fontFamily="SFUIText-Medium, SF UI Text" fontSize="10" fontWeight="400" letterSpacing=".5" fill="#004C69" transform="translate(0 -2)">
              <tspan x="191.67" y="126">9</tspan>
            </text>
            <text fontFamily="SFUIText-Medium, SF UI Text" fontSize="10" fontWeight="400" letterSpacing=".5" fill="#004C69" transform="translate(0 -2)">
              <tspan x="209.99" y="153">10</tspan>
            </text>
          </g>
        </Svg>
        <Text textSize={ 25 }>
          No of heads →
        </Text>
      </div>
    )
  }
}