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
export default class SlideConfidenceInterval extends Component {
  componentDidMount(){
    this.clickCount = 0
    TweenMax.set(['.text-rejection-region', '.text-confidence-interval', '.line-rejection-separator', '.text-95'], { opacity: 0})
    TweenMax.set('.rejection-region.left', { x: -0.9 })
    TweenMax.set('.rejection-region.right', { x: 0.9 })
  }

  handleDivClick = () => {
    this.clickCount ++

    if(this.clickCount === 1) {
      (new TimelineMax())
        .to('.confidence-region', 1,{ fill:'#C1F2D8', y: -4 } )
        .to('.rejection-region.left', 1,{ fill:'#FF7575', x: 3 }, '-=1' )
        .to('.rejection-region.right', 1,{ fill:'#FF7575', x: -3 }, '-=1' )
        .set('.line-rejection-separator', { opacity: 1 })
        .from('.line-rejection-separator',1, {transformOrigin: '0% 0%', scaleY: 0})
        .to('.text-rejection-region', 0.5, {opacity: 1 })
    } else if(this.clickCount === 2) {
      (new TimelineMax())
        .to(['.text-confidence-interval', '.text-95'], 0.5, { opacity: 1})
    }
  }

  render() {
    return (
      <div hasSlideChildren onClick={ this.handleDivClick }>
        <Heading size={4} caps lineHeight={1} textColor="secondary">
          Confidence intervals
        </Heading>
        <SvgNormal xmlns="http://www.w3.org/2000/svg" width="275" height="130" viewBox="0 0 275 130">
            <g fill="none" fill-rule="evenodd">
              <path className="confidence-region" fill="#BFE8EC" d="M59 111.06a98.7 98.7 0 0 0 15.2-13.97c28.6-32.05 42.63-80.2 63.12-80.09 20.49.11 42.52 45.61 65.02 76.76a70 70 0 0 0 19.66 18.5V125H59v-13.94z"/>
              <path className="rejection-region left" fill="#BFE8EC" d="M223 112.89c12 7.25 26.67 11.25 44 11.99v.12h-44v-12.1z"/>
              <path className="rejection-region right" fill="#BFE8EC" d="M58 111.73V125H7c18.78.51 35.78-3.91 51-13.27z"/>
              <g fill="#004C69" font-family="SFUIText-Medium, SF UI Text" font-size="10" font-weight="400" letter-spacing=".5">
                <text transform="translate(-1 136)">
                  <tspan x="139.5" y="10">0</tspan>
                </text>
                <text transform="translate(-1 136)">
                  <tspan x="91.71" y="10">-1σ</tspan>
                </text>
                <text transform="translate(-1 136)">
                  <tspan x="175.84" y="10">1σ</tspan>
                </text>
                <text transform="translate(-1 136)">
                  <tspan x="49.05" y="10">-2σ</tspan>
                </text>
                <text transform="translate(-1 136)">
                  <tspan x="217.18" y="10">2σ</tspan>
                </text>
                <text transform="translate(-1 136)">
                  <tspan x=".91" y="10">-3σ</tspan>
                </text>
                <text transform="translate(-1 136)">
                  <tspan x="262.54" y="10">3σ</tspan>
                </text>
              </g>
              <text className="text-95" fill="#004C69" font-family="SFUIText-Medium, SF UI Text" font-size="24" font-weight="400" letter-spacing="-.3" transform="translate(-1 -2)">
                <tspan x="123" y="82">95</tspan> <tspan x="155" y="82" font-size="11">%</tspan>
              </text>
              <text className="text-confidence-interval"  fill="#004C69" font-family="SFUIText-Medium, SF UI Text" font-size="10" font-weight="400" letter-spacing=".5" transform="translate(-1 -2)">
                <tspan x="87.18" y="10">Confidence Interval</tspan>
              </text>
              <text className="text-rejection-region"  fill="#004C69" font-family="SFUIText-Medium, SF UI Text" font-size="8" font-weight="400" letter-spacing=".4" transform="rotate(90 241.5 78)">
                <tspan x="205.45" y="82.5">Rejection Region</tspan>
              </text>
              <text  className="text-rejection-region" fill="#004C69" font-family="SFUIText-Medium, SF UI Text" font-size="8" font-weight="400" letter-spacing=".4" transform="rotate(90 40.5 77)">
                <tspan x="4.45" y="81.5">Rejection Region</tspan>
              </text>
              <path className="line-rejection-separator" stroke="#7BB3B8" stroke-dasharray="2 1" d="M221.79 6.26v119.71"/>
              <path className="line-rejection-separator" stroke="#7BB3B8" stroke-dasharray="2 1" d="M59.79 6.26v119.71"/>
            </g>
        </SvgNormal>
      </div>
    )
  }
}