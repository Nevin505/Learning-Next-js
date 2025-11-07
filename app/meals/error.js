'use client'

const Error = ({ error }) => {
  console.log("error",error);
  
  return (
    <div className="error">
      <h1>AN Error AN occurred</h1>
    </div>
  )
}

export default Error