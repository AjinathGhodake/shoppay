
import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.scss';
import { signIn, signOut } from 'next-auth/react';
interface IUserMenu {
  session: any;
}
export default function UserMenu({ session }: IUserMenu) {
  return (<div className={styles.menu}>
    <h4>Welcome to Shoppay !</h4>
    {
      session ?
        (
          <div className={styles.flex}>
            <Image className={styles.menu__image} height={58} width={80} src={session && session?.user && session?.user?.image ? session?.user?.image : 'signIn'} alt="" />
            <div className={styles["profile-menu"]}>
              <span>Welcome Back,</span>
              <h3>{session.user.name}</h3>
              <span onClick={() => signOut()}>Sign Out</span>
            </div>
          </div>

        ) :
        (<div className={styles.flex}>
          <button className={styles.btn_primary}>Register</button>
          <button className={styles.btn_outlined} onClick={() => signIn()}>Login</button>
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
