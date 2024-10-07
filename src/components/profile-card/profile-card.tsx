'use client';

import { User } from "next-auth";
import styled from "styled-components";

interface ProfileCardProps {
    profile: User;
};

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
`;

const ProfileCard: React.FC<ProfileCardProps> = ({ profile }) => {

    const { name, username, email, _id, phone } = profile;

    return (
        <StyledDiv>
            <h3>{name}</h3>
            <p><b>Username: </b>{username}</p>
            <p><b>Email: </b>{email}</p>
            <p><b>Phone: </b>{phone}</p>
            <p><b>ID: </b>{_id}</p>
        </StyledDiv>
    );
};

export default ProfileCard;