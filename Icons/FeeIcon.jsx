import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const FeesIcon = ({color, size}) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 28 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M24.0002 2H3.75024C2.5076 2 1.50024 3.00736 1.50024 4.25V17.75C1.50024 18.9926 2.5076 20 3.75024 20H24.0002C25.2429 20 26.2502 18.9926 26.2502 17.75V4.25C26.2502 3.00736 25.2429 2 24.0002 2Z"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M1.50024 8.75H26.2502"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default FeesIcon;
