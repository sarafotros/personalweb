import React from "react"
import ContentLoader from "react-content-loader" 

const MyLoader = (props) => (
  <ContentLoader 
    speed={10}
    width={490}
    height={475}
    viewBox="0 0 490 475"
    backgroundColor="#00396b"
    foregroundColor="#4078a0"
    {...props}
  >
    <rect x="28" y="39" rx="10" ry="10" width="391" height="239" /> 
    <rect x="118" y="91" rx="0" ry="0" width="1" height="0" />
  </ContentLoader>
)

export default MyLoader