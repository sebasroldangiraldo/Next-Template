'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import Form from "../ui/form/form";
import Label from "../ui/label/label";
import Input from "../ui/input/input";
import Button from "../ui/button/button";
import styles from "./sign-up-form.module.scss"
import { AddUser} from "@/types/users";
import { useTranslations } from "next-intl";

const SignUpForm: React.FC = () => {

    

    const router = useRouter();

    const [name, setName] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handleChangePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPhone(event.target.value);
    };

    const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleSignIn = () => {
        router.push('/sign-in');
    };

    const addUser : AddUser = { email: email, username: username, password: password, name: name, phone: phone }; 

    const handleSubmit = async (event : React.FormEvent<HTMLFormElement>): Promise<void> => {

        event.preventDefault();

        if (!name || !email || !password || !username || !phone) {
            alert('Por favor, completa todos los campos.');
            return;
        };

        try {
            const response : Response = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(addUser),
            });

            const data = await response.json();
            console.log(data)

            if (response.ok) {
                alert('Registro exitoso.');
                setName('');
                setUsername('');
                setPhone('');
                setEmail('');
                setPassword('');
            }
            else {
                alert('Error al procesar el registro del usuario.');
            }

        } catch (error) {
            console.error('Error en el registro:', error);
            alert('Ocurrió un error, por favor intenta de nuevo.');
        };
    };

    return (
        <div className={styles.formContainer}>
            <Form className={styles.signUpForm} onSubmit={handleSubmit}>

                <h2>Sign Up</h2>

                <div className={styles.formElement}>
                    <Label HTMLFor="name">
                        Name:
                    </Label>
                    <Input
                        id="name"
                        type="text"
                        placeholder="Enter your name"
                        name="name"
                        value={name}
                        onChange={handleChangeName}
                    >
                    </Input>
                </div>
                <div className={styles.formElement}>
                    <Label HTMLFor="username">
                        Username:
                    </Label>
                    <Input
                        id="userName"
                        type="text"
                        placeholder="Enter your username"
                        name="userName"
                        value={username}
                        onChange={handleChangeUsername}
                    >
                    </Input>
                </div>
                <div className={styles.formElement}>
                    <Label HTMLFor="userEmail">
                        Email:
                    </Label>
                    <Input
                        id="userEmail"
                        type="email"
                        placeholder="Enter your email"
                        name="userEmail"
                        value={email}
                        onChange={handleChangeEmail}
                    >
                    </Input>
                </div>
                <div className={styles.formElement}>
                    <Label HTMLFor="userPhone">
                        Phone number:
                    </Label>
                    <Input
                        id="userPhone"
                        type="string"
                        placeholder="Enter your phone number"
                        name="userPhone"
                        value={phone}
                        onChange={handleChangePhone}
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
                        onChange={handleChangePassword}
                    >
                    </Input>
                </div>
                <div className={`${styles.formElement} ${styles.formButtons}`}>
                    <Button className={styles.formButton} type="submit">
                        Send
                    </Button>
                    <Button className={styles.signUpButton} type="button" onClick={handleSignIn}>
                        Already have an account? <b>Sign In</b>
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default SignUpForm;