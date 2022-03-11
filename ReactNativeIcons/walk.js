import * as React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgWalk = props => <Svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path className="st0" d="M13 17.6V8.3c0-.3 0-.7-.2-1-.1-.3-.3-.6-.6-.8-.2-.2-.5-.4-.8-.6s-.6-.2-1-.2h-.8c-2.1 0-4.1 3.7-4.2 4.1v4c0 .3.2.5.5.5s.5-.2.5-.5v-3.7c.4-.8 1.6-2.8 2.8-3.3v6c0 .8.2 1.5.6 2.1l2.3 2.9 2.9 5.8c.1.2.2.3.4.3h.2c.2-.1.3-.4.2-.6L13 17.6zm-1-1.3-1.5-1.9c-.3-.5-.4-1-.4-1.6V6.7h.3c.2 0 .4 0 .6.1.2.1.4.2.5.3.1.1.3.3.3.5.1.2.1.4.1.6l.1 8.1zm6.4-3.8L15 10.3c-.2-.1-.5-.1-.7.1-.1.2-.1.5.1.7l3.4 2.2c.1 0 .2.1.2.1.1 0 .3-.1.4-.2.3-.3.3-.6 0-.7z" /><Path className="st0" d="m10.3 19-2.7 4c-.1.2-.1.5.1.7.1 0 .2.1.3.1.1 0 .3-.1.4-.2l2.7-4c.1-.2.1-.5-.1-.7-.2-.2-.5-.1-.7.1zm2.2-14.2c1.3 0 2.4-1 2.4-2.4S13.8 0 12.5 0s-2.4 1-2.4 2.4 1.1 2.4 2.4 2.4zm0-3.8c.8 0 1.4.6 1.4 1.4s-.6 1.4-1.4 1.4c-.8 0-1.4-.6-1.4-1.4S11.7 1 12.5 1z" /></Svg>;

export default SvgWalk;