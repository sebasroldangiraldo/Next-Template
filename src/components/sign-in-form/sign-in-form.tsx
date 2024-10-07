'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import Form from "../ui/form/form";
import Label from "../ui/label/label";
import Input from "../ui/input/input";
import Button from "../ui/button/button";
import styles from './sign-in-form.module.scss';

// se crea el componente del formulario de inicio de sesión con su respectiva lógica.

const SignInForm: React.FC = () => {

    // se instancia useRouter para permitir la navegación a través de las páginas del proyecto.

    const router = useRouter();

    // se implementa el useState para definir los estados de los valores obtenidos de cada input en el formulario.

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // se crean las funciones que escuchan los eventos al realizar cambios en el valor de cada input en el formulario.

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    // se crea la función de redirección a la página de registro.

    const handleSignUp = () => {
        router.push('/sign-up');
    };

    // se crea las función que recopila la información ingresada en el formulario y emplea la lógica de conexión con el respectivo endpoint. 

    const handleSubmit = async (event : React.FormEvent<HTMLFormElement>) : Promise<void> => {

        event.preventDefault();
    
        if (!email || !password) {
            alert('Por favor, completa todos los campos.');
            return;
        };

        alert('funcionando');
    
        // try {
        //     const response = await signIn('credentials', {
        //         email,
        //         password,
        //         redirect: false,
        //     });
    
        //     if (response?.ok) {
        //         alert('Inicio de sesión exitoso.');
        //         router.push('/')
        //     } 
        //     else {
        //         alert('Credenciales incorrectas.');
        //     }
        // } catch (error) {
        //     console.error('Error al iniciar sesión:', error);
        //     alert('Ocurrió un error, por favor intenta de nuevo.');
        // };
    };

    return (
        <div className={styles.formContainer}>
            <Form className={styles.signInForm} onSubmit={handleSubmit}>

                <h2>Sign In</h2>

                <div className={styles.formElement}>
                    <Label HTMLFor="userEmail">
                        Username:
                    </Label>
                    <Input
                        id="userEmail"
                        type="email"
                        placeholder="Enter your email"
                        name="userEmail"
                        value={email}
                        onChange={handleEmailChange}
                    >
                    </Input>
                </div>
                <div className={styles.formElement}>
                    <Label HTMLFor="userpassword">
                        Password:
                    </Label>
                    <Input
                        id="userpassword"
                        type="password"
                        placeholder="Enter your password"
                        name="userpassword"
                        value={password}
                        onChange={handlePasswordChange}
                    >
                    </Input>
                </div>
                <div className={`${styles.formElement} ${styles.formButtons}`}>
                    <Button className={styles.formButton} type="submit">
                        Send
                    </Button>
                    <Button className={styles.signUpButton} type="button" onClick={handleSignUp}>
                        Don't have an account? <b>Sign Up</b>
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default SignInForm;