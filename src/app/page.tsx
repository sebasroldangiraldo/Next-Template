'use client';

import ProductsCard from "@/components/product-card/product-card";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import styles from './page.module.scss'
import { useTranslations } from "next-intl";

interface Products {
    id : number,
    title : string,
    price : number,
    description : string,
    category : string,
    image : string,
};

export default function Home() {

    const translate = useTranslations('Home')

    const [products, setProducts] = useState<Products[] | null>(null);

    const { data: session } = useSession();

    const token = session?.user.access_token;

    // `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/products`

    useEffect(() => {

        const fetchProducts = async (): Promise<void> => {

            console.log({session})

            try {

                const response: Response = await fetch('api/products', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    },
                });

                const data = await response.json();
                console.log(data);
                setProducts(data);

            } catch (error) {
                console.log('Error al obtener los productos: ', error);
            }
        }

        fetchProducts();

    }, [token]);

    console.log('productos', products);

    return (
        <div>
            <h3 className={styles.title}>{translate('title')}</h3>
            {products && products.length > 0 ? (
                <div className={styles.cardsContainer}>
                    {products.map((product) => (
                        <ProductsCard
                            key={product.id} 
                            id={product.id} 
                            title={product.title} 
                            price={product.price} 
                            description={product.description} 
                            category={product.category} 
                            image={product.image} 
                        />
                    ))}
                </div>
            ) : (
                <p>Cargando productos...</p>
            )}
        </div>
    );
}