
import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.scss';
interface IUserMenu {
  loggedIn: boolean;
}
export default function UserMenu({ loggedIn }: IUserMenu) {
  return (<div className={styles.menu}>
    <h4>Welcome to Shoppay !</h4>
    {
      loggedIn ?
        (
          <div className={styles.flex}>
            <Image className={styles.menu__image} height={58} width={80} src="https://www.pngarts.com/files/5/User-Avatar-PNG-Transparent-Image.png" alt="" />
            <div className={styles["profile-menu"]}>
              <span>Welcome Back,</span>
              <h3>Ajinath</h3>
              <span>Sign Out</span>
            </div>
          </div>

        ) :
        (<div className={styles.flex}>
          <button className={styles.btn_primary}>Register</button>
          <button className={styles.btn_outlined}>Login</button>
        </div>)
    }
    <ul className={styles["sub-menu"]}>
      <li className={styles["sub-menu-option"]}>
        <Link href="/profile">Account</Link>
      </li>
      <li className={styles["sub-menu-option"]}>
        <Link href="/profile/orders">My Orders</Link>
      </li>
      <li className={styles["sub-menu-option"]}>
        <Link href="/profile/messages">Message Center</Link>
      </li>
      <li className={styles["sub-menu-option"]}>
        <Link href="/profile/address">Address</Link>
      </li>
      <li className={styles["sub-menu-option"]}>
        <Link href="profile/wishlist">Wishlist</Link>
      </li>
    </ul>
  </div>);
}
