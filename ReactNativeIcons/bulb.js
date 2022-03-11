import * as React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgBulb = props => <Svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path className="st0" d="M12 .2c-1 0-2 .2-3 .6-.9.3-1.7.9-2.5 1.6S5.2 4 4.8 5c-.4.9-.6 1.9-.6 3 0 2.3.8 4.4 2.4 5.8l.2.2c.9.9 2.3 2.1 2.3 3.3v1.2c0 .3.2.5.5.5s.5-.2.5-.5v-1.2c0-1.6-1.5-3-2.6-4l-.2-.2C5.9 11.8 5.1 10 5.1 7.9c0-.9.2-1.8.5-2.6.4-.8.9-1.6 1.5-2.2.7-.7 1.4-1.1 2.2-1.5s1.7-.5 2.7-.5c3.8 0 6.8 3 6.8 6.8 0 2.1-.7 3.8-2.1 5.1l-.2.2c-1.1 1-2.5 2.4-2.5 4v1.2c0 .3.2.5.5.5s.5-.2.5-.5v-1.2c0-1.2 1.3-2.4 2.3-3.3l.2-.2c1.6-1.5 2.4-3.5 2.4-5.8C19.8 3.6 16.4.2 12 .2zm1.6 22.7h-3.3c-.3 0-.5.2-.5.5s.2.5.5.5h3.3c.3 0 .5-.2.5-.5s-.2-.5-.5-.5zm.9-2.5H9.6c-.3 0-.5.2-.5.5s.2.5.5.5h4.9c.3 0 .5-.2.5-.5s-.3-.5-.5-.5z" /><Path className="st0" d="M12 19c.3 0 .5-.2.5-.5v-6.1c.8-.2 1.7-.8 1.7-.8.2-.1.2-.5.1-.7s-.5-.2-.7-.1c-.2.2-1.1.7-1.7.7-.6 0-1.4-.5-1.7-.7-.2-.1-.5-.1-.7.1-.1.2-.1.5.1.7.1.1.9.7 1.7.8v6.1c.3.2.4.5.7.5z" /></Svg>;

export default SvgBulb;