'use client';

import ProfileCard from "@/components/profile-card/profile-card";
import { useSession } from "next-auth/react";
import styles from './profile.module.scss'
import Introduction from "@/components/introduction/introduction";

const Profile : React.FC = () => {

    const {data : session } = useSession();

    console.log(session);

    return (
        <div className={styles.cardContainer}>
            <div className={styles.card}>
				<h2 className={styles.title}>My profile</h2>

				{session && session.user && (
					<ProfileCard profile={session.user} />
				)}
			</div>
            <Introduction></Introduction>
        </div>
    );
};

export default Profile;