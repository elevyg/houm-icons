import * as React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgCard = props => <Svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path className="st0" d="M20.3 2.7H3.6C1.6 2.7 0 4.3 0 6.3v11.4c0 2 1.6 3.6 3.6 3.6h16.7c2 0 3.6-1.6 3.6-3.6V6.3c0-2-1.6-3.6-3.6-3.6zm-16.7 1h16.7c1.4 0 2.6 1.2 2.6 2.6V8H1V6.3c0-1.5 1.2-2.6 2.6-2.6zm16.7 16.6H3.6c-1.4 0-2.6-1.2-2.6-2.6V8.9h21.9v8.8c0 1.5-1.1 2.6-2.6 2.6z" /><Path className="st0" d="M7 14.4H5.5c-.3 0-.6.2-.6.6 0 .3.2.6.6.6H7c.3 0 .6-.2.6-.6 0-.3-.2-.6-.6-.6z" /></Svg>;

export default SvgCard;