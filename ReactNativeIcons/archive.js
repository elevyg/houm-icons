import * as React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgArchive = props => <Svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path className="st0" d="M22.1.9H2c-1.1 0-2 .9-2 2v1.3c0 1 .8 1.9 1.8 2v14.2a2.732 2.732 0 0 0 2.7 2.7h15.1a2.732 2.732 0 0 0 2.7-2.7V6.2c1-.1 1.8-1 1.8-2V2.9c-.1-1.1-.9-2-2-2zm-1.3 20.8c-.3.3-.8.5-1.3.5h-15c-.5 0-.9-.2-1.3-.5-.3-.3-.5-.8-.5-1.3V6.2h18.6v14.2c.1.5-.1.9-.5 1.3zm2.3-17.5c0 .6-.5 1.1-1.1 1.1H2C1.4 5.3.9 4.8.9 4.2V2.9c0-.6.5-1.1 1.1-1.1h20c.6 0 1.1.5 1.1 1.1v1.3z" /><Path className="st0" d="m15.3 14.3-2.8 2.8v-6.8c0-.3-.2-.5-.5-.5s-.5.2-.5.5v6.8l-2.8-2.8c-.2-.2-.5-.2-.6 0s-.2.5 0 .6l3.6 3.6c.1.1.2.1.3.1.1 0 .2 0 .3-.1L16 15c.2-.2.2-.5 0-.6-.2-.2-.6-.2-.7-.1zm-3.4 3.1h.2l-.1.1-.1-.1z" /></Svg>;

export default SvgArchive;