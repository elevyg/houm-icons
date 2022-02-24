import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgChevronUp = props => <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path d="M23.5 18c-.1 0-.2 0-.3-.1L12 7.1.8 17.9c-.2.2-.5.2-.6 0s-.2-.5 0-.6L11.7 6.1c.2-.2.5-.2.6 0l11.5 11.1c.2.2.2.5 0 .6 0 .2-.1.2-.3.2z"/></Svg>;

export default SvgChevronUp;