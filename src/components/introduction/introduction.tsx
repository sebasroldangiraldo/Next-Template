import styles from './introduction.module.scss'

const Introduction : React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer} >
                <img className={styles.image} src="/constellation.png" alt="constellation" />
            </div>
            <div className={styles.information}>
                <h1>Discover the infinite galaxies of the universe,</h1>
                <p>buying the best techno-devices. ¡Come with us and live a dream come true!</p>
            </div>
        </div>
    );
};

export default Introduction;