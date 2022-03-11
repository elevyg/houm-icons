import * as React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgAddCircle = props => <Svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path className="st0" d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 23.1C5.9 23.1.9 18.1.9 12S5.9.9 12 .9s11.1 5 11.1 11.1-5 11.1-11.1 11.1z" /><Path className="st0" d="M16.8 11.5h-4.3V7.2c0-.3-.2-.5-.5-.5s-.5.2-.5.5v4.3H7.2c-.3 0-.5.2-.5.5s.2.5.5.5h4.3v4.3c0 .3.2.5.5.5s.5-.2.5-.5v-4.3h4.3c.3 0 .5-.2.5-.5s-.2-.5-.5-.5z" /></Svg>;

export default SvgAddCircle;