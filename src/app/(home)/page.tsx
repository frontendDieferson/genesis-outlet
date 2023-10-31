import Image from 'next/image'
import Categories from './components/categories'
import { prismaClient } from '@/lib/prisma'
import ProductList from './components/product-list'

export default async function Home() {

  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  })

  return (
    <div>
      <Image 
        src="/banner-home01.png"
        width={0}
        height={0}
        alt='até 55% de desconto esse mês'
        className='h-auto w-full'
        sizes='100vw'
      />

      <div className='mt-8 px-5'>
      <Categories />
      </div>
      <div className='mt-8 px-5'>
        <ProductList products={deals} />
      </div>
    </div>

  )
  
}
