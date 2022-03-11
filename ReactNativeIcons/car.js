import * as React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgCar = props => <Svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path className="st0" d="M24 9.8s0-.1 0 0L21.5 4c-.5-1.1-1.7-1.8-3-1.8h-13c-1.3-.1-2.5.7-3 1.8L0 9.7v11.7c0 .3.2.5.5.5h2.1c.3 0 .5-.2.5-.5v-1.6h17.8v1.6c0 .3.2.5.5.5h2.1c.3 0 .5-.2.5-.5V9.8c0 .1 0 .1 0 0zm-23 9v-8.4h22v8.4H1zM3.4 4.3C3.7 3.5 4.6 3 5.5 3h12.9c1 0 1.8.5 2.1 1.3l2.2 5.1H1.2l2.2-5.1zM2.1 20.9H1v-1.1h1.1v1.1zm19.8 0v-1.1H23v1.1h-1.1z" /><Path className="st0" d="M4.7 12.6c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5zm0 2c-.3 0-.6-.2-.6-.6s.2-.6.6-.6c.3 0 .6.2.6.6s-.3.6-.6.6zm14.6-2c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5zm0 2c-.3 0-.6-.2-.6-.6s.2-.6.6-.6c.3 0 .6.2.6.6s-.3.6-.6.6z" /></Svg>;

export default SvgCar;