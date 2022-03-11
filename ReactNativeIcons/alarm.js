import * as React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgAlarm = props => <Svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path className="st0" d="M20.4 7.4c-1.1-1.7-2.7-2.9-4.5-3.7-1.9-.8-3.8-1-5.8-.6S6.3 4.4 4.9 5.8 2.5 9 2.2 11s-.2 4 .5 5.8c.4 1.1 1.1 2.1 1.9 2.9h-.1l-2.4 2.4c-.2.2-.2.5 0 .7.1.2.3.2.3.2s.2 0 .3-.1l2.4-2.4v-.1c.4.3.8.7 1.2 1C8.1 22.4 10 23 12 23c2.5 0 4.9-1 6.8-2.6v.1l2.4 2.4c.1.1.2.1.3.1s.2 0 .3-.1c.2-.2.2-.5 0-.7l-2.4-2.4h-.1c1.7-1.9 2.6-4.3 2.6-6.8.2-2-.4-4-1.5-5.6zM12 22.1c-1.8 0-3.6-.5-5.1-1.5-1.5-1-2.7-2.4-3.4-4.1S2.7 13 3 11.2s1.2-3.4 2.5-4.7C6.8 5.2 8.4 4.3 10.2 4c.6 0 1.2-.1 1.8-.1 1.2 0 2.4.2 3.5.7 1.7.7 3.1 1.9 4.1 3.4s1.5 3.3 1.5 5.1c0 2.4-1 4.7-2.7 6.4-1.7 1.6-4 2.6-6.4 2.6zM5.7 2.7v-.3c0-.1 0-.2-.1-.3 0-.1-.1-.2-.2-.2-.5-.7-1.3-.9-2-.9h-.2C1.4 1.1 0 2.7 0 4.5c0 1 .4 1.4.8 1.9 0 .1.1.1.2.2.1 0 .2.1.3.1.1 0 .2 0 .3-.1.1 0 .1-.1.2-.1L5.5 3c.1-.1.2-.2.2-.3zm-4.4 3c-.2-.3-.3-.6-.3-1.2C1 3.1 2 2 3.2 1.9h.1c.5 0 1 .1 1.3.4L1.3 5.7zM20.8 1h-.2c-.8 0-1.5.3-2.1.8-.1 0-.1.1-.2.2 0 .1-.1.2-.1.3v.3c0 .1.1.2.2.3L22 6.5s.1.1.2.1.2 0 .3.1h.1c.1 0 .2 0 .3-.1.1 0 .2-.1.2-.2.4-.5.8-1 .8-1.9.1-1.8-1.3-3.4-3.1-3.5zm1.9 4.7-3.4-3.3c.4-.3.9-.4 1.3-.4h.1C22 2.1 23 3.2 23 4.6c0 .5-.1.8-.3 1.1z" /><Path className="st0" d="M12 5.8c-.3 0-.5.2-.5.5v6.2H7.2c-.3 0-.5.2-.5.5s.2.5.5.5H12c.3 0 .5-.2.5-.5V6.3c0-.3-.2-.5-.5-.5z" /></Svg>;

export default SvgAlarm;