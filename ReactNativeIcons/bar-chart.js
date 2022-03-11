import * as React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgBarChart = props => <Svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path className="st0" d="M23.5 24H1.3c-.3 0-.7-.1-.9-.4-.3-.2-.4-.6-.4-.9V.5C0 .2.2 0 .5 0s.5.2.5.5v22.2c0 .1 0 .2.1.2 0 0 .1.1.2.1h22.2c.3 0 .5.2.5.5s-.2.5-.5.5z" /><Path className="st0" d="M6.9 20.7H4.8c-.8 0-1.5-.7-1.5-1.5v-7.8c0-.8.7-1.5 1.5-1.5h2.1c.8 0 1.5.7 1.5 1.5v7.8c0 .8-.7 1.5-1.5 1.5zm-2.1-9.9c-.3 0-.5.2-.5.5v7.8c0 .3.2.5.5.5h2.1c.3 0 .5-.2.5-.5v-7.8c0-.3-.2-.5-.5-.5H4.8zm9.5 9.9h-2.1c-.8 0-1.5-.7-1.5-1.5V8.9c0-.8.7-1.5 1.5-1.5h2.1c.8 0 1.5.7 1.5 1.5v10.3c0 .8-.7 1.5-1.5 1.5zM12.2 8.4c-.3 0-.5.2-.5.5v10.3c0 .3.2.5.5.5h2.1c.3 0 .5-.2.5-.5V8.9c0-.3-.2-.5-.5-.5h-2.1zm9.4 12.3h-2.1c-.8 0-1.5-.7-1.5-1.5V5.6c0-.8.7-1.5 1.5-1.5h2.1c.8 0 1.5.7 1.5 1.5v13.6c0 .8-.6 1.5-1.5 1.5zm-2-15.6c-.3 0-.5.2-.5.5v13.6c0 .3.2.5.5.5h2.1c.3 0 .5-.2.5-.5V5.6c0-.3-.2-.5-.5-.5h-2.1z" /></Svg>;

export default SvgBarChart;