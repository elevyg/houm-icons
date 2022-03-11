import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgFolderOpen = props => <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path d="M23.9 9.7c-.1-.3-.2-.5-.4-.8s-.4-.4-.7-.5c-.1 0-.2-.1-.4-.1V6.7c0-.7-.2-1.3-.7-1.8s-1.1-.7-1.8-.7h-8.1c-.3 0-.6-.1-.9-.3l-1.4-1c-.5-.3-1-.4-1.4-.4H4.2c-.7 0-1.3.2-1.8.7S1.7 4.3 1.7 5v3.3c-.1 0-.2 0-.4.1-.3 0-.6.2-.8.5s-.3.4-.4.7-.1.6-.1.9L.8 19c0 .7.2 1.3.7 1.8s1.1.7 1.8.8h17.3c.7 0 1.3-.3 1.8-.8s.7-1.1.7-1.7l.8-8.5c.1-.3.1-.6 0-.9zM3 4c.3-.3.7-.5 1.1-.5H8c.3 0 .6.1.9.3l1.4 1c.4.3.9.4 1.4.4h8c.4 0 .8.1 1.1.5.3.3.5.7.5 1.1v1.6H2.5V5.1c0-.4.2-.9.5-1.1zm19.2 15.1c0 .4-.1.8-.5 1.1-.3.3-.7.5-1.1.5H3.3c-.4 0-.8-.1-1.1-.5-.3-.3-.5-.7-.5-1.2l-.8-8.5V10c0-.2.1-.3.2-.4.1-.1.2-.2.4-.3.1 0 .3-.1.5-.1h19.9c.1 0 .3 0 .5.1s.3.1.4.3c.1.1.2.2.2.4 0 .1.1.3 0 .5l-.8 8.6z" /></Svg>;

export default SvgFolderOpen;