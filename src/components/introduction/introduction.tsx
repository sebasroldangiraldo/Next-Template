import { useTranslations } from 'next-intl';
import styles from './introduction.module.scss'

const Introduction : React.FC = () => {

    const translate = useTranslations('Information');
    
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer} >
                <img className={styles.image} src="/constellation.png" alt="constellation" />
            </div>
            <div className={styles.information}>
                <h1>{translate('title')}</h1>
                <p>{translate('subtitle')}</p>
            </div>
        </div>
    );
};

export default Introduction;