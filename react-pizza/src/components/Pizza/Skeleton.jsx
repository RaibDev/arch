import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="139" cy="137" r="130" /> 
    <rect x="0" y="283" rx="0" ry="0" width="280" height="28" /> 
    <rect x="3" y="327" rx="10" ry="10" width="274" height="77" /> 
    <rect x="3" y="427" rx="10" ry="10" width="82" height="30" /> 
    <rect x="122" y="417" rx="25" ry="25" width="152" height="45" />
  </ContentLoader>
)

export default Skeleton;