import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgOptions = props => <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path d="M.5 4.8h14c.2 1.1 1.2 1.9 2.4 1.9s2.1-.8 2.4-1.9h4.4c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-4.4c-.2-1.1-1.2-1.9-2.4-1.9s-2.1.8-2.4 1.9H.5c-.3 0-.5.2-.5.5s.2.5.5.5zm16.3-1.9c.8 0 1.4.6 1.4 1.4 0 .8-.6 1.4-1.4 1.4-.8 0-1.4-.6-1.4-1.4s.6-1.4 1.4-1.4zm6.7 16.3h-4.4c-.2-1.1-1.2-1.9-2.4-1.9s-2.1.8-2.4 1.9H.3c-.3 0-.5.2-.5.5s.2.5.5.5h14c.2 1.1 1.2 1.9 2.4 1.9s2.1-.8 2.4-1.9h4.4c.3 0 .5-.2.5-.5s-.2-.5-.5-.5zm-6.7 1.9c-.8 0-1.4-.6-1.4-1.4s.6-1.4 1.4-1.4c.8 0 1.4.6 1.4 1.4 0 .8-.6 1.4-1.4 1.4zm6.7-9.6h-14c-.2-1.1-1.2-1.9-2.4-1.9s-2.1.8-2.4 1.9H.5c-.3 0-.5.2-.5.5s.2.5.5.5h4.4c.2 1.1 1.2 1.9 2.4 1.9s2.1-.8 2.4-1.9h14c.3 0 .5-.2.5-.5s-.4-.5-.7-.5zM7.2 13.4c-.8 0-1.4-.6-1.4-1.4s.6-1.4 1.4-1.4c.8 0 1.4.6 1.4 1.4 0 .8-.6 1.4-1.4 1.4z" /></Svg>;

export default SvgOptions;