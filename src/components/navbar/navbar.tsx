'use client';

import { useRouter } from 'next/navigation';
import Button from '../ui/button/button';
import styles from './navbar.module.scss';
import { signOut, useSession } from 'next-auth/react';
import Language from '../language/language';
import { useTranslations } from 'next-intl';

const Navbar: React.FC = () => {

    const translate = useTranslations('Navbar');

    const {data : session } = useSession();

    const router = useRouter();

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
                        <Button type='button' className={styles.navButton} onClick={handleProfile}>{translate('profile')}</Button>
                        <Button type='button' className={styles.navButton} onClick={handleSignOut}>{translate('signout')}</Button>
                        <Language></Language>
                    </div>
                ) : (
                    <div className={styles.options}>
                        <Button type='button' className={styles.navButton} onClick={handleSignIn}>{translate('signin')}</Button>
                        <Button type='button' className={styles.navButton} onClick={handleSignUp}>{translate('signup')}</Button>
                        <Language></Language>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Navbar;