"use client"
import { useSession } from 'next-auth/react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='p-5'>
      <Image 
        src="/banner-home01.png"
        width={0}
        height={0}
        alt='até 55% de desconto esse mês'
        className='h-auto w-full'
        sizes='100vw'
      />
    </div>

  )
  
}
