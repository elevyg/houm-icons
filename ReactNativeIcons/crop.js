import * as React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgCrop = props => <Svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path className="st0" d="M23.5 17.8H8.4c-.6 0-1.2-.2-1.6-.6-.4-.4-.6-1-.6-1.6V.5C6.2.2 6 0 5.8 0s-.5.2-.5.5v4.8H.5c-.3 0-.5.2-.5.5s.2.5.5.5h4.8v9.3c0 .8.3 1.6.9 2.2.6.6 1.4.9 2.2.9h9.3v4.8c0 .3.2.5.5.5s.5-.2.5-.5v-4.8h4.8c.3 0 .5-.2.5-.5 0-.2-.2-.4-.5-.4z" /><Path className="st0" d="M9.3 6.2h6.2c.6 0 1.2.2 1.6.6.4.4.6 1 .6 1.6v6.2c0 .3.2.5.5.5s.5-.2.5-.5V8.4c0-.8-.3-1.6-.9-2.2-.6-.6-1.4-.9-2.2-.9H9.3c-.3 0-.4.2-.4.5s.2.4.4.4z" /></Svg>;

export default SvgCrop;