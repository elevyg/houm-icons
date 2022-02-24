import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgBookmark = props => <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path d="M19.8 23.9c-.1 0-.2 0-.3-.1L12 17l-7.5 6.7c-.1.1-.3.1-.5.1-.2-.1-.3-.2-.3-.4V3.2c0-.8.3-1.6.9-2.2S6 .1 6.8.1h10.4c.8 0 1.6.3 2.2.9.6.6.9 1.4.9 2.2v20.2c0 .2-.1.4-.3.4-.1.1-.1.1-.2.1zm-7.8-8c.1 0 .2 0 .3.1l7 6.4V3.2c0-.6-.2-1.1-.6-1.6-.4-.4-1-.6-1.5-.6H6.8c-.5 0-1 .2-1.5.7-.4.4-.6 1-.6 1.6v19.2l7-6.4c.1-.1.2-.2.3-.2z"/></Svg>;

export default SvgBookmark;