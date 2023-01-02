import Image from 'next/image';
import styles from './styles.module.scss';
import { MdSecurity } from 'react-icons/md';
import { RiAccountPinCircleLine, RiArrowDropDownFill, } from 'react-icons/ri';
import { BsSuitHeart } from 'react-icons/bs';
import Link from 'next/link';
import { useState } from 'react';
import UserMenu from './UserMenu';
import { useSession } from 'next-auth/react';
export default function Top({ country }: any) {

    const { data: session } = useSession();
    const [isVisible, setIsVisible] = useState(false);
    return (
        <div className={styles.top}>
            <div className={styles.top__container}>
                <div></div>
                <ul className={styles.top__list}>
                    <li className={styles.top__option}>
                        <Image height={28} width={28} src={country?.flag} alt="" />
                        <span className={styles.top__title}>{country?.name}/INR</span>
                    </li>
                    <li className={styles.top__option}>
                        <MdSecurity />
                        <span className={styles.top__title}>Buyer Protection</span>
                    </li>
                    <li className={styles.top__option}>

                        <span className={styles.top__title}>Customer Security</span>
                    </li>
                    <li className={styles.top__option}>

                        <span className={styles.top__title}>Help</span>
                    </li>
                    <li className={styles.top__option}>
                        <BsSuitHeart />
                        <Link href="/profile/wishlist">
                            <span className={styles.top__title}>Wishlist</span>
                        </Link>

                    </li>
                    <li className={styles.top__option}
                        onMouseOver={() => setIsVisible(true)}
                        onMouseLeave={() => setIsVisible(false)}
                    >
                        {
                            session ? (
                                <div className={styles.top__option}>
                                    <Image src={session && session?.user && session?.user?.image ? session?.user?.image : 'placeholder'} height={20} width={30} alt="" />
                                    <span className={styles.top__title}>{session?.user?.name}</span>
                                    <RiArrowDropDownFill />

                                </div>
                            ) : (
                                <div className={styles.top__option}>
                                    <RiAccountPinCircleLine />
                                    <span className={styles.top__title}>Account</span>
                                    <RiArrowDropDownFill />
                                </div>
                            )}
                        {isVisible && <UserMenu session={session} />}
                    </li>
                </ul>
            </div>
        </div>
    );
}
