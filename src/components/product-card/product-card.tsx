'use client';

import styles from './product-card.module.scss'

interface Products {
    id: number,
    title: string,
    price: number,
    description?: string,
    category: string,
    image: string,
};


const ProductsCard: React.FC<Products> = ({ id, title, price, category, image }) => {

    return (
        <div className={styles.cardContainer}>
            <div className={styles.imageContainer}>
                <img className={image} src={image} alt={title} />
            </div>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.text}><b>$ </b>{price}</p>
            <p className={styles.text}><b>Category: </b>{category}</p>
            <p className={styles.text}><b>ID: </b>{id}</p>
        </div>
    );
};

export default ProductsCard;