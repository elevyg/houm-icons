import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgSwapVertical = props => <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path d="m23.9 9-6.2-6.2c-.2-.2-.5-.2-.7 0L10.8 9c-.2.2-.2.5 0 .7.2.2.5.2.7 0l5.4-5.4v16.6c0 .3.2.5.5.5s.5-.2.5-.5V4.2l5.4 5.4c.1.1.2.1.3.1.1 0 .2 0 .3-.1.1-.1.1-.4 0-.6zm-11.3 5.3-5.4 5.4V3.1c0-.3-.2-.5-.5-.5s-.5.2-.5.5v16.6L.8 14.3c-.2-.2-.5-.2-.7 0-.1.2-.1.5 0 .7l6.2 6.2c.1.1.2.1.3.1s.2 0 .3-.1l6.2-6.2c.2-.2.2-.5 0-.7-.1-.2-.4-.2-.5 0z"/></Svg>;

export default SvgSwapVertical;