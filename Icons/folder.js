import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgFolder = props => <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path d="M23.3 4.9c-.5-.5-1.1-.7-1.8-.7H10.2c-.3 0-.6-.1-.9-.3l-1.4-1c-.4-.2-.9-.4-1.4-.4H2.6c-.7 0-1.3.3-1.8.8S0 4.4 0 5v14c0 .7.2 1.3.7 1.8s1.1.7 1.8.7h18.9c.7 0 1.3-.2 1.8-.7.5-.5.7-1.1.7-1.8V6.7c.1-.7-.1-1.3-.6-1.8zm-21.8-1c.3-.3.7-.5 1.1-.5h3.9c.3 0 .6.1.9.3l1.4 1c.4.3.9.4 1.4.4h11.3c.4 0 .8.2 1.1.5.3.3.5.7.5 1.1v1.6H1V5.1c0-.5.1-.9.5-1.2zm21.1 16.3c-.3.3-.7.5-1.1.5H2.6c-.4 0-.8-.1-1.1-.5-.3-.3-.5-.7-.5-1.1V9.2h22.1V19c0 .4-.2.9-.5 1.2z"  /></Svg>;

export default SvgFolder;