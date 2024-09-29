import { View, Text } from 'react-native'
import * as React from "react"
import Svg, { Path,Mask, G, Defs, ClipPath, RadialGradient, Stop,Pattern, Use, Image } from "react-native-svg"


export function MenuSVG(props) {
  return (
    <Svg
      width={41}
      height={32}
      viewBox="0 0 41 32"
      fill="none"
     
      {...props}
    >
      <Path
        stroke="rgba(0, 0, 0, 0.9)"
        strokeWidth={3}
        d="M0.509399 1.81476L40.9194 1.81476"
      />
      <Path
        stroke="#fff"
        strokeWidth={3}
        d="M0.509399 15.9879L40.9194 15.9879"
      />
      <Path
        stroke="#fff"
        strokeWidth={3}
        d="M0.509399 30.1611L40.9194 30.1611"
      />
    </Svg>
  )
}

export function TextureRect(props) {
  return (
    <Svg
      width={475}
      height={450}
      viewBox="0 0 475 450"
      fill="none"
     
      {...props}
    >
      <Path
        opacity={0.8}
        transform="rotate(142.574 511.083 27.677)"
        fill="url(#paint0_radial_69_4598)"
        d="M511.083 27.6772H1205.296V91.49119999999999H511.083z"
      />
      <Defs>
        <RadialGradient
          id="paint0_radial_69_4598"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(578.98687 10.76856 -99.94384 5373.62065 572.316 56.735)"
        >
          <Stop stopColor="#fff" stopOpacity={0.1} />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </RadialGradient>
      </Defs>
    </Svg>
  )
}

export function NotificationBellSVG(props) {
  return (
    <Svg
      width={props.width || 28}
      height={props.width || 28}
      viewBox="0 0 28 34"
      fill="none"
     
      {...props}
    >
      <Path
        d="M18.115 29.79a4.217 4.217 0 00-4.225-4.21 4.217 4.217 0 00-4.225 4.21A4.217 4.217 0 0013.89 34a4.217 4.217 0 004.225-4.21z"
        fill="rgba(0, 0, 0, 0.9)"
      />
      <Path
        d="M13.89 25.58c-.427 0-.84.064-1.228.182a4.212 4.212 0 012.997 4.028c0 1.9-1.263 3.505-2.997 4.029.398.12.812.181 1.228.181a4.217 4.217 0 004.225-4.21 4.217 4.217 0 00-4.225-4.21zM14.383 5.221a2.505 2.505 0 01-2.95-1.956 2.497 2.497 0 011.963-2.94 2.506 2.506 0 012.95 1.956 2.497 2.497 0 01-1.963 2.94z"
        fill="rgba(0, 0, 0, 0.9)"
      />
      <Path
        d="M24.354 29.086H3.426A3.385 3.385 0 01.37 24.233c.22-.46.542-.865.94-1.184l.673-.541a6.575 6.575 0 002.459-5.124v-3.55c0-5.24 4.262-9.486 9.519-9.486 5.257 0 9.519 4.247 9.519 9.485v3.616a6.569 6.569 0 002.376 5.057l.655.544a3.415 3.415 0 011.233 2.623v.034a3.384 3.384 0 01-3.391 3.379z"
        fill="rgba(0, 0, 0, 0.9)"
      />
      <Path
        d="M26.512 23.05l-.655-.544a6.575 6.575 0 01-2.376-5.057v-3.616c0-5.238-4.262-9.485-9.519-9.485-.908 0-1.81.128-2.682.383 3.951 1.153 6.837 4.792 6.837 9.102v3.616c0 1.953.87 3.806 2.376 5.057l.655.544a3.414 3.414 0 011.233 2.623v.035a3.384 3.384 0 01-3.39 3.378h5.363a3.384 3.384 0 003.39-3.378v-.034a3.407 3.407 0 00-1.232-2.624z"
        fill="rgba(0, 0, 0, 0.9)"
      />
    </Svg>
  )
}





