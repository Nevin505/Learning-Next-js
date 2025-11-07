'use client'

const Error = ({ error }) => {
  console.log("error",error);
  
  return (
    <div className="error">
      <h1>Failed to Create emial</h1>
    </div>
  )
}

export default Error