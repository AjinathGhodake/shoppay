import Image from 'next/image';
import styles from './styles.module.scss';
import { MdSecurity } from 'react-icons/md';
import { RiAccountPinCircleLine, RiArrowDropDownFill, } from 'react-icons/ri';
import { BsSuitHeart } from 'react-icons/bs';
import Link from 'next/link';
import { useState } from 'react';
import UserMenu from './UserMenu';
export default function Top() {
    const [loggedIn, setLoggerIn] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    return (
        <div className={styles.top}>
            <div className={styles.top__container}>
                <div></div>
                <ul className={styles.top__list}>
                    <li className={styles.top__option}>
                        <Image height={28} width={28} src="https://www.seekpng.com/png/detail/323-3232715_morocco-flag-png-angel-tube-station.png" alt="" />
                        <span className={styles.top__title}>USD</span>
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
                            loggedIn ? (
                                <li className={styles.top__option}>
                                    <Image src="https://www.pngarts.com/files/5/User-Avatar-PNG-Transparent-Image.png" height={20} width={30} alt="" />
                                    <span className={styles.top__title}>Ajinath</span>
                                    <RiArrowDropDownFill />

                                </li>
                            ) : (
                                <li className={styles.top__option}>
                                    <RiAccountPinCircleLine />
                                    <span className={styles.top__title}>Account</span>
                                    <RiArrowDropDownFill />
                                </li>
                            )}
                        {isVisible && <UserMenu loggedIn={loggedIn} />}
                    </li>
                </ul>
            </div>
        </div>
    );
}
