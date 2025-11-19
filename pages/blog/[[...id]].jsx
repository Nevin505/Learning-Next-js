import Link from 'next/link';
import { useRouter } from 'next/router'
import React, { use } from 'react'

const ID = () => {
    const router = useRouter();
    console.log("teh router",router.query);
    
  return (
    <div>ID
      <Link href='/portfolio'>CLick to Portfoilio</Link>
    </div>
  )
}

export default ID