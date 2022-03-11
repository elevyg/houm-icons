import * as React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgPeopleCircle = props => <Svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path className="st0" d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 1.8c5.6 0 10.1 4.5 10.1 10.1 0 1.8-.5 3.5-1.3 5l-.1-.1c-1.4-.9-3-1.2-4.8-1.2-1.8 0-3.4.5-4.8 1.3-1.5 1-2.6 2.3-2.9 4-.1.1-.1.3-.1.5-.5-.2-.9-.5-1.4-.8 0 0 .1-.1.1-.2.4-1.6 1.3-3 2.6-4.1.1 0 .1-.1.1-.2.1-.1.1-.1 0-.2 0-.1-.1-.1-.1-.2-.1 0-.1-.1-.2-.1-.7-.2-1.5-.4-2.4-.4-1.3 0-2.8.4-3.9 1-.6-1.3-1-2.7-1-4.2C1.8 6.4 6.4 1.8 12 1.8z" /><Path className="st0" d="M13.1 12.8c.8.8 1.8 1.2 2.8 1.2s2-.4 2.8-1.2c.8-.8 1.2-1.9 1.2-2.9.1-1.2-.3-2.3-1-3.1s-1.8-1.2-3-1.2c-1.1 0-2.2.4-2.9 1.2s-1.1 1.9-1.1 3.1c.1 1 .5 2.1 1.2 2.9zm-9.8-2c.2 1.9 1.7 3.5 3.3 3.5s3.2-1.6 3.4-3.6c.1-1-.2-1.9-.9-2.6-.6-.6-1.5-1-2.5-1s-1.8.3-2.5 1c-.5.7-.9 1.7-.8 2.7z" /></Svg>;

export default SvgPeopleCircle;