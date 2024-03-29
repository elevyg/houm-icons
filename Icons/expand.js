import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgExpand = props => <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path d="M23.5 15.7c-.3 0-.5.2-.5.5v6.2l-7.6-7.6c-.2-.2-.5-.2-.7 0s-.2.5 0 .7l7.6 7.6h-6.2c-.3 0-.5.2-.5.5s.2.5.5.5h7.3c.3 0 .5-.2.5-.5v-7.3c.1-.3-.1-.6-.4-.6zM1.6.9h6.2c.3 0 .5-.2.5-.5S8.1 0 7.8 0H.5C.2 0 0 .2 0 .5v7.3c0 .3.2.5.5.5s.5-.2.5-.5V1.6l7.6 7.6c.1.1.2.1.3.1s.2 0 .3-.1c.2-.2.2-.5 0-.7L1.6.9zM23.5 0h-7.3c-.3 0-.5.2-.5.5s.2.5.5.5h6.2l-7.6 7.6c-.2.2-.2.5 0 .7.1.1.2.1.3.1s.2 0 .3-.1L23 1.7v6.2c0 .3.2.5.5.5s.5-.3.5-.6V.5c0-.3-.2-.5-.5-.5zm-15 14.8L.9 22.4v-6.2c0-.3-.2-.5-.5-.5s-.4.2-.4.5v7.3c0 .3.2.5.5.5h7.3c.3 0 .5-.2.5-.5s-.2-.5-.5-.5H1.6l7.6-7.6c.2-.2.2-.5 0-.7s-.5-.1-.7.1z" /></Svg>;

export default SvgExpand;