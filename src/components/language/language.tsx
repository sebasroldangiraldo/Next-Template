'use client';
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import Button from "../ui/button/button";

const Language : React.FC = () => {

    const router = useRouter();

    const handleClick = ( event : any) : void => {
        Cookies.set("locale", event.target.value);
        router.refresh();
    };

    return (
        <div>
            <Button type='button' value={'en'} onClick={handleClick}>En</Button>
            <Button type='button' value={'es'} onClick={handleClick}>Es</Button>
        </div>
    )
};

export default Language;