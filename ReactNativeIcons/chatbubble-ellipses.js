import * as React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgChatbubbleEllipses = props => <Svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path className="st0" d="M2.2 24c-.1 0-.3 0-.4-.1s-.2-.1-.3-.2c-.1-.1-.1-.2-.2-.3 0-.1-.1-.2-.1-.4v-.3l1.1-3.9s0-.2-.2-.5c0 0 0-.1-.1-.1-1.3-2-2-4.2-2-6.5 0-3.1 1.2-6 3.4-8.2C5.7 1.3 8.7 0 12 0c5.7 0 10.6 4 11.8 9.4.2.8.2 1.6.2 2.4 0 6.5-5.3 11.8-11.8 11.8-1.1 0-2.5-.3-3.3-.5-.9-.2-1.7-.6-1.7-.6-.1 0-.3 0-.4-.1-.1 0-.3 0-.5.1l-3.8 1.3c-.1.2-.2.2-.3.2zM12 1C9 1 6.2 2.2 4.1 4.3 2.1 6.3 1 9 1 11.8c0 2.1.6 4.1 1.7 5.8 0 0 .1.1.1.2.3.5.3.9.3 1.2L2 22.9v.1h.1L6 21.7c.2-.1.5-.1.8-.1s.5 0 .8.1c0 0 .8.3 1.6.5s2.1.4 3 .4c6 0 10.8-4.9 10.8-10.8 0-.7-.1-1.5-.2-2.2C21.7 4.6 17.2 1 12 1zM2.7 18.9z" /><Path className="st0" d="M6.7 13.8c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8-1.8.9-1.8 1.8.9 1.8 1.8 1.8zm5.3 0c1 0 1.8-.8 1.8-1.8s-.8-1.7-1.8-1.7-1.8.8-1.8 1.8.9 1.7 1.8 1.7zm5.3 0c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8-1.8.8-1.8 1.8.8 1.8 1.8 1.8z" /></Svg>;

export default SvgChatbubbleEllipses;