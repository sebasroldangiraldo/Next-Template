'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import Form from "../ui/form/form";
import Label from "../ui/label/label";
import Input from "../ui/input/input";
import Button from "../ui/button/button";
import styles from './sign-in-form.module.scss';
import { signIn } from "next-auth/react";

// se crea el componente del formulario de inicio de sesión con su respectiva lógica.

const SignInForm: React.FC = () => {

    // se instancia useRouter para permitir la navegación a través de las páginas del proyecto.

    const router = useRouter();

    // se implementa el useState para definir los estados de los valores obtenidos de cada input en el formulario.

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    // se crean las funciones que escuchan los eventos al realizar cambios en el valor de cada input en el formulario.

    const handleUserNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(event.target.value);
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
    
        if (!username || !password) {
            alert('Por favor, completa todos los campos.');
            return;
        };

        try {
            const response = await signIn('credentials', {
                username,
                password,
                redirect: false,
            });
    
            if (response?.ok) {
                alert('Inicio de sesión exitoso.');
                router.push('/')
            } 
            else {
                alert('Credenciales incorrectas.');
            }
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            alert('Ocurrió un error, por favor intenta de nuevo.');
        };
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
                        id="userName"
                        type="text"
                        placeholder="Enter your username"
                        name="userName"
                        value={username}
                        onChange={handleUserNameChange}
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