import * as React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgInformationCircle = props => <Svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path className="st0" d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 23.1C5.9 23.1.9 18.1.9 12S5.9.9 12 .9s11.1 5 11.1 11.1-5 11.1-11.1 11.1z" /><Path className="st0" d="M15 17.3h-2.3v-7.1c0-.3-.2-.5-.5-.5h-2c-.3 0-.5.2-.5.5s.2.5.5.5h1.6v6.6H9.5c-.3 0-.5.2-.5.5s.2.5.5.5H15c.2 0 .5-.2.5-.5s-.2-.5-.5-.5zm-4.2-9.9c.2.2.5.4.8.4s.7 0 .9-.1.6-.3.8-.6.3-.6.3-.9c0-.4-.2-.8-.5-1.1-.3-.3-.8-.5-1.2-.5-.3 0-.7.1-.9.3-.3.2-.5.4-.6.8-.1.3-.1.6-.1.9s.3.6.5.8z" /></Svg>;

export default SvgInformationCircle;