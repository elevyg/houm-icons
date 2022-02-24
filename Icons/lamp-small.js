import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgLampSmall = props => <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path d="M16.8.4c0-.2-.2-.4-.5-.4H7.6c-.3 0-.5.1-.5.4L4.3 16.1c0 .1 0 .3.1.4.1.1.2.2.4.2h6v4.5H9c-.2 0-.4.1-.4.3L7.9 23H6.7c-.3 0-.5.2-.5.5s.2.5.5.5h10.6c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-1.2l-.7-1.6c-.1-.2-.2-.3-.4-.3h-1.9v-4.5h1.6v.9c-.4.2-.7.6-.7 1.1 0 .7.5 1.2 1.2 1.2s1.2-.5 1.2-1.2c0-.5-.3-.9-.7-1.1v-.9h3.4c.1 0 .3 0 .4-.2.1-.1.1-.2.1-.4L16.8.4zM15.2 19c-.2 0-.2-.1-.2-.3s.1-.2.2-.2.2.1.2.2-.1.3-.2.3zm-5.3-3.3 1-14.8h1.9l1 14.8H9.9zM7.9 1H10L9 15.7H5.4L7.9 1zM15 23H8.9l.4-1h5.4l.3 1zm-2.9-1.9h-.4v-4.5h.4v4.5zm2.7-5.4L13.8 1h2.1l2.6 14.8h-3.7z"/></Svg>;

export default SvgLampSmall;