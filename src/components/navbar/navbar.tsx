'use client';

import { useRouter } from 'next/navigation';
import Button from '../ui/button/button';
import styles from './navbar.module.scss';
import { signOut, useSession } from 'next-auth/react';

const Navbar: React.FC = () => {

    const {data : session } = useSession();

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

    const handleSignOut = () => {
        signOut();
    };

    return (
        <header className={styles.header}>
             <nav className={styles.navbar}>
                <div className={styles.title}>
                    <Button type='button' className={styles.tittleButton} onClick={handleHome}><h1>Cosmos Store</h1></Button>
                </div>

                {session?.user ? (
                    
                    <div className={styles.options}>
                        <Button type='button' className={styles.navButton} onClick={handleProfile}>Profile</Button>
                        <Button type='button' className={styles.navButton} onClick={handleSignOut}>Sign Out</Button>
                    </div>
                ) : (
                    <div className={styles.options}>
                        <Button type='button' className={styles.navButton} onClick={handleSignIn}>Sign In</Button>
                        <Button type='button' className={styles.navButton} onClick={handleSignUp}>Sign Up</Button>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Navbar;