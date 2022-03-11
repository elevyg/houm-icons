import * as React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgMailUnread = props => <Svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path className="st0" d="M22.2 11.2c-.3 0-.5.2-.5.5v7.2c0 .4-.2.9-.5 1.1s-.7.5-1.1.5H2.6c-.4 0-.8-.2-1.1-.5-.4-.2-.5-.7-.5-1.1V6.3c0-.4.2-.8.5-1.1.3-.3.7-.5 1.1-.5h12.2c.3 0 .5-.2.5-.5s-.3-.5-.5-.5H2.6c-.7 0-1.4.3-1.8.8S0 5.6 0 6.3v12.6c0 .7.3 1.3.8 1.8s1.1.8 1.8.8h17.5c.7 0 1.3-.3 1.8-.8s.8-1.1.8-1.8v-7.2c0-.3-.2-.5-.5-.5z" /><Path className="st0" d="M4.1 7.2c-.2-.1-.5-.1-.7.1-.1.2-.1.5.1.7l7.6 5.8c.1 0 .2.1.3.1s.2 0 .3-.1l4.6-3.4c.2-.1.2-.5.1-.7-.1-.2-.5-.2-.7-.1l-4.3 3.2-7.3-5.6zM23.4 4c-.4-.6-.9-1-1.5-1.2-.6-.3-1.3-.3-1.9-.2-.7.1-1.2.4-1.7.9s-.8 1.1-.9 1.7c-.1.7 0 1.3.2 1.9.2.6.7 1.1 1.2 1.5.6.4 1.2.6 1.8.6.9 0 1.7-.3 2.3-1 .6-.6 1-1.5 1-2.3.1-.7-.1-1.3-.5-1.9z" /></Svg>;

export default SvgMailUnread;