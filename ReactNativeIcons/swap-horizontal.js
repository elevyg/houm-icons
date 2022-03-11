import * as React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgSwapHorizontal = props => <Svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path className="st0" d="M3.2 7.2h16.6l-5.4 5.4c-.2.2-.2.5 0 .7.1.1.2.1.3.1.1 0 .2 0 .3-.1L21.1 7c.2-.2.2-.5 0-.7L15 .2c-.2-.2-.5-.2-.7 0s-.2.5 0 .7l5.4 5.4H3.2c-.3 0-.5.2-.5.5 0 .2.2.4.5.4z" /><Path className="st0" d="M20.8 16.8H4.3l5.4-5.4c.2-.2.2-.5 0-.7-.2-.2-.5-.2-.7 0L2.8 17c-.1.1-.1.2-.1.3s0 .2.1.3L9 23.8c.1.1.2.2.3.2s.2 0 .3-.1c.2-.2.2-.5 0-.7l-5.3-5.4h16.6c.3 0 .5-.2.5-.5s-.3-.5-.6-.5z" /></Svg>;

export default SvgSwapHorizontal;