import * as React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgBasket = props => <Svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path className="st0" d="M23.6 9c-.3-.3-.7-.5-1.2-.5h-4.8l-5.2-6.9c-.2-.2-.6-.2-.8 0L6.5 8.5H1.6c-.4 0-.8.1-1.1.5-.3.3-.5.7-.5 1.1v.4l2.8 10.1c.1.6.5 1.1 1 1.4.5.3 1.1.5 1.6.5h12.9c.6 0 1.2-.2 1.6-.5.5-.3.8-.9 1-1.4l2.8-10.1v-.4c.3-.4.1-.8-.1-1.1zM12 2.7l4.3 5.8H7.7L12 2.7zm11 7.6-2.8 10.1c-.1.4-.3.7-.6.9s-.7.3-1.1.3H5.6c-.4 0-.8-.1-1.1-.3-.3-.2-.5-.6-.6-.9L1 10.3v-.1c0-.2 0-.3.2-.4.1-.1.3-.2.4-.2h20.8c.2 0 .3 0 .4.2.1.1.2.3.2.4v.1z" /><Path className="st0" d="M13.4 12.9c-.5-.2-1.1-.3-1.6-.1-.5.1-1.1.4-1.4.8-.4.4-.7.9-.8 1.4-.1.5 0 1.1.1 1.6.2.5.6 1 1 1.3.4.3 1 .5 1.5.5.8 0 1.4-.3 2-.8s.8-1.3.8-2c0-.6-.1-1.1-.5-1.5-.3-.5-.5-1-1.1-1.2zm.3 3.9c-.3.3-.8.5-1.3.5-.4 0-.7-.1-1-.3-.3-.2-.5-.5-.7-.8-.1-.3-.2-.7-.1-1.1 0-.3.2-.7.5-1 .2-.2.6-.4 1-.5h.3c.2 0 .5 0 .7.1.3.1.6.4.8.7.2.3.2.7.2 1.1.1.5-.1 1-.4 1.3z" /></Svg>;

export default SvgBasket;