import React, { useState } from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import styles from '../styles/signin.module.scss';
import { BiLeftArrowAlt } from "react-icons/bi";
import Link from 'next/link';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import LoginInput from '../components/inputs/loginInput';
import CircledIconButton from '../components/buttons/circledIconButton';
import { getProviders, signIn } from 'next-auth/react';
import Image from 'next/image';
const initialValues = {
  loginEmail: "",
  loginPassword: ""
};
export default function Signin({ providers }: any) {
  console.log('providers', providers);
  const [user, setUser] = useState(initialValues);
  const { loginEmail, loginPassword } = user;
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };


  const loginValidation = Yup.object().shape({
    loginEmail: Yup.string().required("Email Address is required.").email("Please enter a valid Email Address"),
    loginPassword: Yup.string().required("Password is required.")
  });

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
          <div className={styles.login__form}>
            <h1>Sign in</h1>
            <p>
              Get access to one of the best Eshoping services in the world.
            </p>
            <Formik
              enableReinitialize
              initialValues={{
                loginEmail,
                loginPassword
              }}
              onSubmit={() => { }}
              validateOnChange={false}
              validationSchema={loginValidation}
            >
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
                    <LoginInput
                      type="password"
                      name="loginPassword"
                      icon="PASSWORD"
                      placeholder='Password'
                      onChange={handleChange}
                    ></LoginInput>
                    <CircledIconButton type="submit" text="submit" icon="" />
                    <div className={styles.forgot}>
                      <Link href="/forget">Forgot password ?</Link>
                    </div>
                  </Form>
                )
              }
            </Formik>
            <div className={styles.login__socials}>
              <span className={styles['horizontal-line']}>Or continue with</span>
              <div className={styles.login__socials_wrap}>
                {providers.map((provider: any) => (
                  <div key={provider.name}>
                    <button className={styles.social__button} onClick={() => signIn(provider.id)}>
                      <Image width={36} height={36} src={`/icons/${provider.name}.png`} alt="" />
                      Sign in with {provider.name}
                    </button>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
      <Footer country="India" />
    </>
  );
}

export async function getServerSideProps(context: any) {
  const providers = Object.values(await getProviders() as any);
  return {
    props: { providers }
  };
}