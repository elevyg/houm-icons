import * as React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgRibbon = props => <Svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path className="st0" d="m22.9 19.1-4.8-8.7c.5-1 .8-2.1.8-3.3 0-3.9-3.1-7-7-7s-7 3.1-7 7c0 1.2.3 2.3.8 3.3L.9 19.1c-.1.1-.1.3 0 .5s.2.2.4.2h4.5s.2.1.2.2l2.2 3.7c.1.1.2.2.4.2s.3-.1.4-.3l2.9-6.2 2.9 6.2c.1.1.2.3.4.3s.3-.1.4-.2L18 20l.1-.1h4.5c.2 0 .3-.1.4-.2 0-.3 0-.4-.1-.6zM11.8 1c3.3 0 6 2.7 6 6 0 1.1-.3 2.1-.8 2.9-1.1 1.8-3 3-5.3 3-3.3 0-6-2.7-6-6S8.5 1 11.8 1zM8.5 22.4l-1.7-2.9c-.1-.2-.3-.3-.5-.5-.2-.1-.4-.2-.6-.1H2l4.2-7.6c1.3 1.7 3.3 2.8 5.6 2.8h.4l-3.7 8.3zm9.5-3.5c-.2 0-.4 0-.6.1-.2.1-.3.3-.5.5l-1.7 2.9-2.8-6.1 1.1-2.3c1.6-.4 3-1.4 4-2.6l4.2 7.6-3.7-.1z" /><Path className="st0" d="M11.8 10.8c2.1 0 3.8-1.7 3.8-3.8s-1.7-3.8-3.8-3.8S8.1 5 8.1 7.1s1.7 3.7 3.7 3.7zm0-6.5c1.5 0 2.8 1.3 2.8 2.8s-1.3 2.8-2.8 2.8C10.3 9.9 9 8.7 9 7.1s1.3-2.8 2.8-2.8z" /></Svg>;

export default SvgRibbon;