import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import styles from '../styles/signin.module.scss';
import { BiLeftArrowAlt } from "react-icons/bi";
import Link from 'next/link';
export default function signin() {
  return (
    <>
      <Header country="India" />
      <div className={styles.login}>
        <div className={styles.login__container}>
          <div className={styles.login__header}>
            <div className={styles.back__svg}>
              <BiLeftArrowAlt />
            </div>
            <span>
              We'd be happy to join us! <Link href="/">Go Store</Link>
            </span>
          </div>
        </div>
      </div>
      <Footer country="India" />
    </>
  );
}
