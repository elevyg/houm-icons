import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgClose = props => <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path d="M12.6 12 23.9.8c.2-.2.2-.5 0-.6-.2-.2-.5-.2-.6 0L12 11.4.8.1C.6 0 .3 0 .1.1 0 .3 0 .6.1.8L11.4 12 .1 23.2c-.2.2-.2.5 0 .6.1.2.2.2.4.2s.2 0 .3-.1L12 12.6l11.2 11.2c.1.1.2.1.3.1.1 0 .2 0 .3-.1.2-.2.2-.5 0-.6L12.6 12z" /></Svg>;

export default SvgClose;