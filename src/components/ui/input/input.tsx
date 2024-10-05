'use client';

import styled from "styled-components";

interface InputProps {
    id : string;
    type : string;
    placeholder? : string;
    name : string;
    value : string | number;
    className? : string;
    onChange : (event : React.ChangeEvent<HTMLInputElement>) => void;
};

const StyledInput = styled.input `
   padding: 0.5rem 0.5rem;
   border-radius: 0.3rem;
   border: 0.07rem solid lightgrey;
   font-family: var(--font-principal);
`;

const Input : React.FC<InputProps> = ({ id, type, placeholder, name, value, className, onChange }) => {
    return (
        <StyledInput id={id} type={type} placeholder={placeholder} name={name} value={value} className={className} onChange={onChange}></StyledInput>
    );
};

export default Input;