import * as React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgEnter = props => <Svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path className="st0" d="M23.2 3.5c-.5-.5-1.2-.8-1.9-.8H9.8a2.732 2.732 0 0 0-2.7 2.7v2.2c0 .3.2.4.5.4s.4-.1.4-.4V5.4c0-.5.2-.9.5-1.2s.8-.5 1.2-.5h11.5c.5 0 .9.2 1.2.5.4.3.6.7.6 1.2v13.2c0 .5-.2.9-.5 1.2-.3.3-.8.5-1.2.5H9.8c-.5 0-.9-.2-1.2-.5-.4-.3-.6-.7-.6-1.2v-2.2c0-.3-.1-.4-.4-.4-.3 0-.5.2-.5.5v2.2a2.732 2.732 0 0 0 2.7 2.7h11.5a2.732 2.732 0 0 0 2.7-2.7V5.4c-.1-.8-.3-1.4-.8-1.9z" /><Path className="st0" d="M12.6 16.1c-.2.2-.2.5 0 .6.1.1.2.1.3.1.1 0 .2 0 .3-.1l4.4-4.4c.2-.2.2-.5 0-.6l-4.4-4.4c-.2-.2-.5-.2-.6 0s-.2.5 0 .6l3.6 3.6H.5c-.3 0-.5.2-.5.5s.2.5.5.5h15.7l-3.6 3.6z" /></Svg>;

export default SvgEnter;