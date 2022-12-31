import Image from 'next/image';
import Link from 'next/link';
import { RiSearch2Line } from 'react-icons/ri';
import { FaOpencart } from 'react-icons/fa';
import styles from './styles.module.scss';
import { useSelector } from 'react-redux';

export default function Main() {
    const { cart } = useSelector((state: any) => ({ ...state }));
    console.log(cart);

    return (
        <div className={styles.main}>
            <div className={styles.main__container}>
                <Link href="" className={styles.main__logo}>
                    <img src="/logo.png" width={170} height={58} alt=''></img>
                </Link>
                <div className={styles.main__search}>
                    <input type="text" placeholder='Search...' />
                    <div className={styles["main__search-icon"]}>
                        <RiSearch2Line />
                    </div>
                </div>
                <Link href='/cart' className={styles.main__cart}>
                    <FaOpencart />
                    <span className='cart__count'>0</span>
                </Link>
            </div>
        </div>
    );
}
