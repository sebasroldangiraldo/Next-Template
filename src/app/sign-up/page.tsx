'use client';

import Introduction from "@/components/introduction/introduction";
import styles from './sign-up.module.scss';
import SignUpForm from "@/components/sign-up-form/sign-up-form";


const SignUp: React.FC = () => {
    return (
        <div className={styles.container}>
            <SignUpForm></SignUpForm>
            <Introduction></Introduction>
        </div>
    );
};

export default SignUp;