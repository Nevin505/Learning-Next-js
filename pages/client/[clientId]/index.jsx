import { useRouter } from 'next/router'

const ClientDetails = () => {
    const router = useRouter();
    
    const navigateHandler = () => {
        router.push('/blog')
    }
  return (
      <div>
          <p>ClientDetails {router.query.clientId}</p>
          <button onClick={navigateHandler}>Click to naviate</button>
      </div>
  )
}

export default ClientDetails