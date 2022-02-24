import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgChevronDown = props => <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path d="M12 18c-.1 0-.2 0-.3-.1L.2 6.8c-.2-.2-.2-.4 0-.6.2-.2.5-.2.7 0L12 16.9 23.1 6.2c.2-.2.5-.2.6 0 .2.2.2.5 0 .6l-11.5 11c0 .1-.1.2-.2.2z"/></Svg>;

export default SvgChevronDown;