import React, { Component } from 'react'
import {
  Heading,
  Slide,
  Text,
} from 'spectacle';
import { TimelineMax, TweenMax, Back } from "gsap";
import styled from 'styled-components';

const SvgNormal = styled.svg`
  height: 80vh;
  width: 65vw;
  overflow: visible;
  margin: 3vh auto 0 auto;
`
export default class SlideNormalDistribution extends Component {
  componentDidMount(){
    new TimelineMax()
      .from('.coin-toss-normal', 0.5, { opacity: 0 })
  }

  handleClick = () => {
    TweenMax
      .to('.g1', 0.4, { x: 50 })
    TweenMax
      .to('.g2', 0.4, { x: -50 })
  }

  render() {
    return (
      <div hasSlideChildren onClick={ this.handleClick }>
        <Heading size={4} caps lineHeight={1} textColor="secondary">
          Successful A/B Test
        </Heading>
        <SvgNormal width="530px" height="158px" viewBox="0 0 530 158" xmlns="http://www.w3.org/2000/svg">
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="Group-7" transform="translate(0.000000, -2.000000)">
                <path d="M0.5,138.5 L529.5,138.5" id="Line" stroke="#004C69" stroke-linecap="square"></path>
                <text id="2%" font-family="SFUIText-Medium, SF UI Text" font-size="10" font-weight="400" letter-spacing="0.49999997" fill="#004C69">
                  <tspan x="135.897949" y="159">2%</tspan>
                </text>
                <text id="1%" font-family="SFUIText-Medium, SF UI Text" font-size="10" font-weight="400" letter-spacing="0.49999997" fill="#004C69">
                  <tspan x="16.5742188" y="159">1%</tspan>
                </text>
                <g id="Normal-Graph" transform="translate(14.000000, 30.000000)" fill="#BFE8EC" opacity="0.648777174">
                  <path className="g1" d="M0,108.002013 C25.5900846,108.54009 47.9188892,98.1272503 66.9864139,76.7634954 C95.587701,44.717863 109.832514,-0.11443925 130.318824,0.000175083712 C150.805134,0.114789418 172.835669,45.6126969 195.344292,76.7634954 C210.350041,97.5306944 233.80632,107.943534 265.713131,108.002013 L0,108.002013 Z" id="Path"></path>
                </g>
                <text id="3%" font-family="SFUIText-Medium, SF UI Text" font-size="10" font-weight="400" letter-spacing="0.49999997" fill="#004C69">
                  <tspan x="265.77832" y="159">3%</tspan>
                </text>
                <text id="4%" font-family="SFUIText-Medium, SF UI Text" font-size="10" font-weight="400" letter-spacing="0.49999997" fill="#004C69">
                  <tspan x="379.69043" y="159">4%</tspan>
                </text>
                <text id="5%" fill="#005F7C" font-family="SFUIText-Medium, SF UI Text" font-size="10" font-weight="400" letter-spacing="0.49999997">
                  <tspan x="503.814941" y="159">5%</tspan>
                </text>
                <path className="g1" d="M228.999996,125.885268 C241.00637,133.142169 255.673039,137.139436 273,137.87707 L273,138.002013 L229,138.002013 L229,125.885271 Z" id="Combined-Shape" fill="#FF7575"></path>
                <g id="Normal-Graph" transform="translate(253.000000, 30.000000)" fill="#C1F2D8" opacity="0.648777174">
                  <path className="g2" d="M0,108.002013 C25.5900846,108.54009 47.9188892,98.1272503 66.9864139,76.7634954 C95.587701,44.717863 109.832514,-0.11443925 130.318824,0.000175083712 C150.805134,0.114789418 172.835669,45.6126969 195.344292,76.7634954 C210.350041,97.5306944 233.80632,107.943534 265.713131,108.002013 L0,108.002013 Z" id="Path"></path>
                </g>
                <path className="g2" d="M300,124.727617 L300,138.002013 L249,138.002013 C267.775802,138.513398 284.775802,134.088599 300,124.727617 Z" id="Combined-Shape" fill="#FF7575"></path>
                <path className="g1" d="M143.788385,19.2599925 L143.788385,138.972426" id="Path-2" stroke="#7BB3B8" stroke-dasharray="2,1"></path>
                <path className="g2"  d="M382.788385,19.2599925 L382.788385,138.972426" id="Path-2" stroke="#7BB8A1" stroke-dasharray="2,1"></path>
                <text className="g1" id="VARIANT-#1" font-family="SFUIText-Medium, SF UI Text" font-size="10" font-weight="400" letter-spacing="0.5" fill="#004C69">
                  <tspan x="112.171875" y="10">VARIANT #1</tspan>
                </text>
                <text className="g2" id="VARIANT-#2" font-family="SFUIText-Medium, SF UI Text" font-size="10" font-weight="400" letter-spacing="0.5" fill="#004C69">
                  <tspan x="351.495605" y="10">VARIANT #2</tspan>
                </text>
              </g>
            </g>
        </SvgNormal>
      </div>
    )
  }
}