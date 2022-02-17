import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgSchool = props => <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path d="M24 8.7v-.1s0-.1-.1-.1l-.1-.1-11.6-6.7c-.1-.1-.3-.1-.5 0L.2 8.3c-.1.1-.2.2-.2.4s.1.3.2.4l3.9 2.2v6.4c0 .2.1.3.2.4l7.4 4.1h.3l7.4-4.1c.1-.1.2-.2.2-.4v-6.4L23 9.6v8.2c0 .3.2.5.5.5s.5-.3.5-.6v-9zM5.1 11.9l6.4 3.7V21l-6.4-3.6v-5.5zm13.8 5.6-6.4 3.6v-5.5l6.4-3.7v5.6zM12 14.7l-10.5-6 10.5-6 10.5 6-10.5 6z" style={{
    fill: "#263238"
  }} /></Svg>;

export default SvgSchool;