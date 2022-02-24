import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgPerson = props => <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path d="M12 11.6c2.7 0 5.1-2.6 5.3-5.7.1-1.6-.4-3-1.4-4.1C14.9.7 13.5.1 12 .1S9.1.7 8.1 1.8 6.6 4.3 6.7 5.9c.2 3.1 2.6 5.7 5.3 5.7zM8.8 2.4c.8-.9 2-1.3 3.2-1.3s2.4.5 3.2 1.3c.8.9 1.2 2.1 1.1 3.4-.2 2.6-2.2 4.8-4.3 4.8S7.8 8.4 7.7 5.8c-.1-1.3.2-2.5 1.1-3.4zm14.1 19.7c-1-5.5-6.3-8-10.9-8s-10 2.5-10.9 8c-.1.5 0 1 .3 1.3.2.3.6.5 1 .5h19.2c.4 0 .8-.1 1-.5.3-.3.4-.8.3-1.3zm-1 .7c0 .1-.1.1-.3.1H2.4c-.1 0-.2 0-.3-.1-.1-.1-.2-.3-.1-.5.9-5 5.8-7.2 10-7.2s9.1 2.2 10 7.2c0 .2 0 .3-.1.5z"/></Svg>;

export default SvgPerson;