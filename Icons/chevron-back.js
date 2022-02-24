import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgChevronBack = props => <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path d="M18.4 23.9c-.1 0-.2 0-.3-.1L5.2 12.3c-.1-.1-.1-.2-.1-.3 0-.1 0-.3.1-.3L18.1.2c.2-.2.5-.1.6 0s.1.5 0 .6L6.3 12l12.5 11.2c.2.2.2.5 0 .6-.1.1-.2.1-.4.1z"/></Svg>;

export default SvgChevronBack;