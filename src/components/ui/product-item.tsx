import { ProductWithTotalPrice } from "@/helpers/product";
import { Product } from "@prisma/client";
import Image from "next/image";
interface ProductItemProps {
    product: ProductWithTotalPrice
}

const ProductItem = ({product}: ProductItemProps) => {
    return ( 
        <div className="flex flex-col gap-4 max-w-[156px]">
            <div className="bg-accent rounded-lg h-[170px]  w-[156px] flex items-center justify-center">
                <Image 
                    src={product.imageUrls[0]}
                    alt={product.name}
                    height={0}
                    width={0}
                    sizes='100vw'
                    className="h-auto w-auto max-w-[80%] max-h-[80%]"
                    style={{
                        objectFit:'contain',
                    }}
                />
            </div>
            <div className="text-sm overflow-hidden whitespace-nowrap text-ellipsis">
                <p>{product.name}</p>
                <div className="flex items-center gap-2">
                    {product.discountPercentage > 0 ? (
                       <>
                         <p className="font-semibold text-sm">R$ {product.totalPrice.toFixed(2)}</p>
                        
                        <p className="text-xs opacity-75 line-through">R$ {Number(product.basePrice).toFixed(2)}</p>
                       </>
                    ): (
                        <p className="font-semibold text-sm">R$ {product.basePrice.toFixed(2)}</p>
                    )}
                    
                </div>
            </div>
        </div>
     );
}
 
export default ProductItem;