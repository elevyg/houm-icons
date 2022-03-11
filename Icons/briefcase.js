import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgBriefcase = props => <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path d="M21.1 5h-2.8V3.8c0-.6-.2-1.1-.6-1.5-.4-.4-.9-.6-1.5-.6H7.9c-.6 0-1.1.3-1.5.6-.4.4-.6.9-.6 1.5V5H3C1.4 5 .1 6.3.1 7.9v11.5c0 1.6 1.3 2.9 2.9 2.9h18c1.6 0 2.9-1.3 2.9-2.9V7.9C24 6.3 22.6 5 21.1 5zM6.8 3.8c0-.3.1-.6.3-.8.2-.2.5-.3.8-.3h8.2c.3 0 .6.1.8.3.2.2.3.5.3.8V5H6.7l.1-1.2zM3 5.9h18c1.1 0 2 .9 2 2v2.8H1V7.9c0-1.1.9-2 2-2zm6.2 5.8h5.6v.7H9.2v-.7zm11.9 9.7H3c-1.1 0-2-.9-2-2v-7.7h7.2v.8c0 .2.1.5.2.6s.4.2.6.2h5.7c.2 0 .5-.1.6-.2.1-.2.2-.4.2-.6v-.8h7.2v7.7c.3 1.1-.6 2-1.6 2z" /></Svg>;

export default SvgBriefcase;