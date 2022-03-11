import * as React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgTrash = props => <Svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path className="st0" d="M21.9 3.6h-5.8V1.8c0-.2 0-.5-.1-.7-.1-.2-.2-.4-.4-.6-.2-.2-.4-.3-.6-.4-.3-.1-.5-.1-.7-.1H9.9c-.3 0-.5 0-.7.1s-.5.3-.6.4-.3.4-.4.6c-.1.2-.1.5-.1.7v1.8H2.3c-.3 0-.5.1-.5.4s.2.5.5.5h1.3l1.1 17.3c0 1.3 1 2.2 2.2 2.2h10.2c1.2 0 2.2-.9 2.2-2.2l1.1-17.3h1.3c.3 0 .5-.2.5-.5s-.1-.4-.3-.4zM9 1.8v-.3c0-.1.1-.2.2-.3.1-.1.2-.1.3-.2h5c.1 0 .2.1.3.2.1.1.2.2.2.3v2.1H9V1.8zm9.5 19.9c0 .8-.6 1.3-1.3 1.3H6.9c-.7 0-1.3-.6-1.3-1.3l-1-17.2h15l-1.1 17.2z" /><Path className="st0" d="M12.1 7.1c-.3 0-.5.2-.5.5V20c0 .3.2.5.5.5s.5-.2.5-.5V7.6c-.1-.3-.3-.5-.5-.5zm-4 0c-.3 0-.5.2-.5.5L8.1 20c0 .2.2.5.5.5.2-.1.4-.3.4-.5L8.5 7.6c0-.3-.2-.5-.4-.5zM15.2 20c0 .3.2.5.5.5.2 0 .5-.2.5-.5l.5-12.4c0-.3-.2-.5-.5-.5s-.5.2-.5.5L15.2 20z" /></Svg>;

export default SvgTrash;