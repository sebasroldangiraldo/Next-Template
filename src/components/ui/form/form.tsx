'use client';

import styled from "styled-components";

interface FormProps {
    className? : string;
    children : React.ReactNode;
    onSubmit : (event : React.FormEvent<HTMLFormElement>) => void;
};

const StyledForm = styled.form `
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.7rem;
    border: 0.07rem solid lightgrey;
    border-radius: 0.3rem;
    padding: 1.5rem;
`;

const Form : React.FC<FormProps> = ({ className, children, onSubmit }) => {
    return (
        <StyledForm className={className} onSubmit={onSubmit} >{children}</StyledForm>
    );
};

export default Form;