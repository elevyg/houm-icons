import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgTrailSign = props => <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path d="m23.9 15.8-3.1-3.1c-.1-.1-.3-.2-.4-.3-.1 0-.3-.1-.5-.1h-7.4V10h7.7c.3 0 .7-.1.9-.4.2-.2.4-.6.4-.9V3.8c0-.3-.1-.7-.4-.9-.2-.2-.6-.4-.9-.4h-7.7V1.3c0-.3-.2-.5-.5-.5s-.5.2-.5.5v1.1H4.2c-.2 0-.3 0-.5.1-.2.2-.3.3-.5.4l-3.1 3c-.1.2-.1.5 0 .7l3.1 3.1c.1.1.2.2.4.3h7.9v2.3H3.8c-.3 0-.7.1-.9.4s-.4.6-.4.9v4.9c0 .3.1.7.4.9s.6.4.9.4h7.7v2.8c0 .3.2.5.5.5s.5-.2.5-.5v-2.8h7.4c.2 0 .3 0 .5-.1.1 0 .3-.1.4-.3l3.1-3.1c.1 0 .1-.4 0-.5zM4 9s-.1 0 0 0L1.2 6.3l2.7-2.7.1-.1h16.2c.1 0 .2 0 .2.1 0 0 .1.1.1.2v4.9c0 .1 0 .2-.1.2 0 0-.1.1-.2.1H4zm16.1 9.8c0 .1 0 .1 0 0-.1.1-.2.1-.2.1H3.8c-.1 0-.2 0-.2-.1 0 0-.1-.1-.1-.2v-5c0-.1 0-.2.1-.2 0 0 .1-.1.2-.1H20s.1 0 .1.1l2.7 2.7-2.7 2.7z" /></Svg>;

export default SvgTrailSign;