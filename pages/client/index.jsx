import Link from 'next/link'
import React from 'react'

const ClientsPage = () => {
  return (
      <div>
          <h1>the client Name</h1>
          <Link href={{ pathname: '/client/[clientId]', query: { clientId: 'max' } }}>MAx</Link>
          <Link href={{ pathname: '/client/[clientId]', query: {clientId:'ramu'} } }>ramu</Link>
          
    </div>
  )
}

export default ClientsPage