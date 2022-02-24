import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgFlash = props => <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path d="M20.7 9.4c-.1-.2-.2-.3-.4-.3h-6L15.8.9V.6c0-.1 0-.1-.1-.2 0 0-.1-.1-.2-.1H15c-.1 0-.1.1-.2.1L3.3 14c-.1.1-.1.3 0 .5s.2.3.4.3h6l-1.5 8.3v.3c0 .1 0 .1.1.2 0 0 .1.1.2.1H9c.1 0 .1-.1.2-.1L20.7 9.9c.1-.1.1-.3 0-.5zM9.5 22l1.4-7.5c0-.1 0-.3-.1-.4-.1-.1-.3-.1-.4-.1H4.7l9.9-11.9-1.4 7.5c0 .1 0 .3.1.4.1.1.2.2.4.2h5.6L9.5 22z"/></Svg>;

export default SvgFlash;