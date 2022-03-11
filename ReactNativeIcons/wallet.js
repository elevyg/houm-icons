import * as React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgWallet = props => <Svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path className="st0" d="M22.8 6.3V4.4c0-1.1-.4-2.1-1.1-2.8S19.9.5 18.9.5H4c-1 0-2.1.4-2.8 1.1C.4 2.4 0 3.4 0 4.4v15.1c0 1.1.4 2.1 1.1 2.8.8.9 1.9 1.2 2.9 1.2h14.7c1.1 0 2.1-.4 2.8-1.1.8-.7 1.1-1.8 1.1-2.8v-2.1c.8-.7 1.2-1.6 1.2-2.7V9c.2-1.1-.3-2-1-2.7zm-1 13.3c0 .8-.3 1.6-.9 2.2-.6.6-1.3.9-2.2.9H4c-.8 0-1.6-.3-2.2-.9-.6-.6-.9-1.3-.9-2.2V4.4c0-.8.3-1.6.9-2.2.7-.5 1.4-.8 2.2-.8h14.7c.8 0 1.6.3 2.2.9.6.6.9 1.3.9 2.2v1.2c-.4-.2-1-.3-1.5-.3h-7.1c-2 0-3.6 1.6-3.6 3.6v5.8c0 2 1.6 3.6 3.6 3.6h7.1c.5 0 1-.1 1.5-.3v1.5zm1.2-4.8c0 1.5-1.2 2.7-2.7 2.7h-7.1c-1.5 0-2.7-1.2-2.7-2.7V9c0-1.5 1.2-2.7 2.7-2.7h7.1C21.8 6.3 23 7.5 23 9v5.8z" /><Path className="st0" d="M16.3 9c-1.6 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3c0-1.6-1.4-3-3-3zm0 5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" /></Svg>;

export default SvgWallet;