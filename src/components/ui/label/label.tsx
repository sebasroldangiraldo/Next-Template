'use client';

import styled from "styled-components";

interface LabelProps {
    HTMLFor : string;
    className? : string;
    children : React.ReactNode;
};

const StyledLabel = styled.label `
   font-size: 0.9rem;
`;

const Label : React.FC<LabelProps> = ({ HTMLFor, className, children }) => {
    return (
        <StyledLabel htmlFor={HTMLFor} className={className}>{children}</StyledLabel>
    );
};

export default Label;