import * as React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgCalendar2 = props => <Svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path className="st0" d="M18 2.9h-.7V.6c0-.3-.2-.5-.5-.5s-.5.2-.5.5v2.3H8.1V.6c0-.3-.2-.5-.5-.5s-.5.2-.5.5v2.3H6C3.4 2.9 1.2 5 1.2 7.6v11.5c0 2.6 2.1 4.8 4.8 4.8h12c2.6 0 4.8-2.1 4.8-4.8V7.6c0-2.6-2.2-4.7-4.8-4.7zM6 3.8h1.2v2.7c0 .3.2.5.5.5s.4-.2.4-.5V3.8h8.2v2.7c0 .3.2.5.5.5s.5-.2.5-.5V3.8h.7c2.1 0 3.8 1.7 3.8 3.8v1.5H2.2V7.6c0-2.1 1.7-3.8 3.8-3.8zM18 23H6c-2.1 0-3.8-1.7-3.8-3.8v-9.1h19.6v9.1c0 2-1.7 3.8-3.8 3.8z" /><Path className="st0" d="M15.9 16.6h-4.5c-.3 0-.5.2-.5.5s.2.5.5.5h4.5c.3 0 .5-.2.5-.5-.1-.3-.3-.5-.5-.5zm-7.3-.5c-.5 0-.9.4-.9.9s.4.9.9.9.9-.4.9-.9c0-.4-.4-.9-.9-.9z" /></Svg>;

export default SvgCalendar2;