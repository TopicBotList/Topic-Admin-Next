import useSWR from "swr";
import Image from "next/image";

interface Props {
    id: string;
    className?: string;
}

export default function DisplayAvatar({ id, className }: Props) {
    const { data: user, error } = useSWR(`/user/${id}`);

    return (
        <>
            <Image
                src={
                    user?.avatar
                        ? user?.avatar
                        : "https://cdn.topicliist.xyz/images/png/Defaultuser.png"
                }
                alt={"Avatar"}
                width={100}
                height={100}
                className={className}
                priority={true}
            />
        </>
    );
}
