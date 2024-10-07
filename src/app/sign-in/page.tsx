'use client';

import Introduction from "@/components/introduction/introduction";
import SignInForm from "@/components/sign-in-form/sign-in-form";
import styles from './sign-in.module.scss'

const SignIn: React.FC = () => {
    return (
        <div className={styles.container}>
            <SignInForm></SignInForm>
            <Introduction></Introduction>
        </div>
    );
};

export default SignIn;