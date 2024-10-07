'use client';

import { useRouter } from 'next/navigation';
import Button from '../ui/button/button';
import styles from './navbar.module.scss';

const Navbar: React.FC = () => {

    // se instancia useRouter para permitir la navegación a través de las páginas del proyecto.

    const router = useRouter();

    // se crean las funciones de redirección a las páginas del proyecto.

    const handleSignIn = () => {
        router.push('/sign-in');
    };

    const handleSignUp = () => {
        router.push('/sign-up');
    };

    const handleHome = () => {
        router.push('/');
    };

    const handleProfile = () => {
        router.push('/profile');
    };

    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <div className={styles.title}>
                    <Button type='button' className={styles.tittleButton} onClick={handleHome}><h1>Cosmos Store</h1></Button>
                </div>
                    <div className={styles.options}>
                        <Button type='button' className={styles.navButton} onClick={handleSignIn}>Sign In</Button>
                        <Button type='button' className={styles.navButton} onClick={handleSignUp}>Sign Up</Button>
                        <Button type='button' className={styles.navButton} onClick={handleProfile}>Profile</Button>
                    </div>
                
            </nav>
        </header>
    );
};

export default Navbar;