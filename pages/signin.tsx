import React, { useState } from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import styles from '../styles/signin.module.scss';
import { BiLeftArrowAlt } from "react-icons/bi";
import Link from 'next/link';
import { Form, Formik } from 'formik';
import LoginInput from '../components/inputs/loginInput';
const initialValues = {
  loginEmail: "",
  loginPassword: ""
};
export default function SignIn() {
  const [user, setUser] = useState(initialValues);
  const { loginEmail, loginPassword } = user;
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    console.log(">>>>>", user);
  };

  console.log(">>>>>", user);

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
              We'd be happy to join us ! <Link href="/">Go Store</Link>
            </span>
          </div>
          <div className={styles.login__form}>
            <h1>Sign in</h1>
            <p>
              Get access to one of the best Eshoping services in the world.
            </p>
            <Formik>
              {
                (form) => (
                  <Form>
                    <LoginInput
                      type="text"
                      name="loginEmail"
                      icon="EMAIL"
                      placeholder='Email Address'
                      onChange={handleChange}
                    ></LoginInput>
                  </Form>
                )
              }
            </Formik>
          </div>
        </div>
      </div>
      <Footer country="India" />
    </>
  );
}

