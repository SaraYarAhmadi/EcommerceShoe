import React from 'react'
interface ProductRatingViewModel {
    rate: number,
    count: number,
}

interface ProductsViewModel {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: ProductRatingViewModel,
}
export default function otherbak() {

    const [allProducts, setAllProducts] = useState<ProductsViewModel[]>([])
    useEffect(() => {
        fetch("http://localhost:5500/Products/GetAllProduct")
            .then(res => res.json())
            .then(data => {
                console.log(data);

                setAllProducts(data)
            })
    }, [])

    return (
        <div>   {
            !!allProducts.length &&
            allProducts.map(product => (
                <li key={product.id}>{product.title}</li>
            ))
        }</div>
    )
}
function useState<T>(arg0: never[]): [any, any] {
    throw new Error('Function not implemented.');
}

function useEffect(arg0: () => void, arg1: never[]) {
    throw new Error('Function not implemented.');
}

