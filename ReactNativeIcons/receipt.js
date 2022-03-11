import * as React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgReceipt = props => <Svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path className="st0" d="M23.6.8c-.1-.1-.3-.1-.5 0l-1.4.7-1.4-.7h-.4l-1.4.7-1.4-.7h-.4l-1.4.7-1.4-.7h-.4l-1.4.7-1.4-.7h-.4l-1.6.7L7.3.8c-.1-.1-.3 0-.5 0-.1.1-.2.3-.2.4v14.3H1.3c-.2 0-.3 0-.5.1-.1 0-.3.1-.4.3-.1.1-.2.2-.3.4s-.1.3-.1.5C0 20.1.3 23 4.6 23h14.7c1.2 0 2.4-.5 3.2-1.4.9-.9 1.4-2 1.4-3.2V1.2c0-.1-.1-.3-.3-.4zM4.6 22C1.5 22 1 20.4 1 16.8v-.2h13.6v1.9c0 1.2.5 2.4 1.4 3.2.1.1.3.2.4.4H4.6zm18.3-3.6c0 1-.3 1.9-1 2.6-.7.7-1.6 1.1-2.6 1.1s-1.9-.4-2.6-1.1c-.7-.7-1-1.6-1-2.6V16c0-.3-.2-.5-.5-.5H7.5V2l.9.5h.4l1.4-.7 1.4.7h.4l1.4-.7 1.6.7h.4l1.4-.7 1.4.7h.4l1.4-.7 1.4.7h.4l1.1-.5v16.4z" /><Path className="st0" d="M20.1 5.7h-9.8c-.3 0-.5.2-.5.5s.2.5.5.5h9.8c.3 0 .5-.2.5-.5s-.2-.5-.5-.5zm0 4.1h-6.5c-.3 0-.5.2-.5.5s.2.5.5.5h6.5c.3 0 .5-.2.5-.5s-.2-.5-.5-.5z" /></Svg>;

export default SvgReceipt;