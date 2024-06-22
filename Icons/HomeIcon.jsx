import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const HomeIcon = ({color, size}) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 20 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M2 8.3L10.1 2L18.2 8.3V18.2C18.2 18.6774 18.0104 19.1352 17.6728 19.4728C17.3352 19.8104 16.8774 20 16.4 20H3.8C3.32261 20 2.86477 19.8104 2.52721 19.4728C2.18964 19.1352 2 18.6774 2 18.2V8.3Z"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default HomeIcon;
