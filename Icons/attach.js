import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgAttach = props => <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path d="M12.1 24c-.8 0-1.6-.2-2.4-.5-.7-.4-1.3-.8-1.9-1.5-.6-.6-1-1.4-1.3-2.2-.3-.8-.4-1.7-.4-2.6V4.9c0-.6.1-1.3.3-1.9s.6-1.1.9-1.6c.5-.4.9-.8 1.5-1 1.1-.5 2.4-.5 3.4 0 .6.2 1 .6 1.4 1.1.4.5.7 1 .9 1.6.2.6.3 1.3.3 1.9v12.3c0 .8-.3 1.6-.8 2.1-.5.6-1.3.9-2 .9s-1.4-.3-2-.9c-.5-.6-.8-1.3-.8-2.1V7.8c0-.3.2-.5.5-.5s.5.2.5.5v9.4c0 .6.2 1.1.6 1.5.4.4.8.6 1.3.6s.9-.2 1.3-.6c.4-.4.6-.9.6-1.5V4.9c0-.6-.1-1.1-.3-1.6s-.5-.9-.9-1.3c-.3-.4-.7-.6-1.2-.9-.8-.4-1.8-.4-2.6 0-.4.2-.8.6-1.1.9-.4.4-.6.9-.8 1.3-.2.5-.3 1-.3 1.5v12.4c0 .8.1 1.5.4 2.3.3.7.6 1.3 1.1 1.9s1 1 1.7 1.3c1.3.6 2.6.6 3.9 0 .6-.3 1.2-.7 1.7-1.3.5-.6.8-1.2 1.1-1.9.3-.7.4-1.5.4-2.3V5.6c0-.3.2-.5.5-.5s.5.2.5.5v11.5c0 .9-.1 1.8-.4 2.5-.3.8-.7 1.6-1.3 2.2-.6.6-1.2 1.2-1.9 1.5-.8.5-1.6.7-2.4.7z"/></Svg>;

export default SvgAttach;