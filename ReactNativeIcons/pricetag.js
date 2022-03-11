import * as React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgPricetag = props => <Svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path className="st0" d="M23.2 1.3c-.1-.2-.2-.5-.4-.7-.2-.2-.4-.3-.6-.4-.2-.1-.5-.1-.7-.1H15c-.3 0-.6.1-.9.4L1.2 14c-.4.4-.6.9-.6 1.5s.2 1.1.6 1.5l6.1 6.4c.4.4.9.6 1.4.6s1-.2 1.4-.6L23 9.8c.2-.2.4-.6.4-.9V2.2c-.1-.3-.1-.6-.2-.9zm-.8 7.6c0 .1 0 .1-.1.2L9.5 22.7c-.4.3-1.1.3-1.5 0l-6.1-6.4c-.2-.2-.3-.5-.3-.8s.1-.6.3-.8L14.7 1.2s.1-.1.2-.1h6.4c.1 0 .3 0 .4.1.1 0 .2.1.3.2.1.1.2.2.2.3v7.2z" /><Path className="st0" d="M19.3 3.3c-.3-.1-.6-.1-1-.1-.3 0-.6.2-.9.5-.2.3-.4.6-.4 1 0 .3 0 .7.1 1 .1.3.3.6.6.8.3.2.6.3.9.3.5 0 .9-.2 1.2-.5.3-.3.5-.8.5-1.3 0-.3-.1-.7-.3-1-.1-.3-.4-.5-.7-.7z" /></Svg>;

export default SvgPricetag;