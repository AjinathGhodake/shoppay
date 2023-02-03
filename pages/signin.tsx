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
  loginPassword: "",
  name: "",
  email: "",
  password: "",
  confirmPassword: ""
};
export default function Signin({ providers }: any) {
  console.log('providers', providers);
  const [user, setUser] = useState(initialValues);
  const { loginEmail, loginPassword, name,
    email,
    password,
    confirmPassword } = user;
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const country =
    { name: "India", flag: "https://cdn.ipregistry.co/flags/emojitwo/in.svg" };
  const loginValidation = Yup.object().shape({
    loginEmail: Yup.string().required("Email Address is required.").email("Please enter a valid Email Address"),
    loginPassword: Yup.string().required("Password is required.")
  });
  const registerValidation = Yup.object({
    name: Yup.string().required("What's your Name ?")
      .min(2, "First Name must be between 2 and 16 character.")
      .max(16, "First Name must be between 2 and 16 character.")
      .matches(/^[aA-zZ]/, "Numbers and Characters are not allowed."),
    email: Yup.string()
      .required(
        "You'll need this when you log in and if you ever need to reset your password."
      )
      .email("Enter a valid email address."),
    password: Yup.string()
      .required(
        "Enter a combination of at least six numbers,letters and punctuation marks(such as ! and &)."
      )
      .min(6, "Password must be atleast 6 characters.")
      .max(36, "Password can't be more than 36 characters"),
    confirmPassword: Yup.string()
      .required("Confirm your password.")
      .oneOf([Yup.ref("password")], "Passwords must match."),
  });
  return (
    <>
      <Header country={country} />
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
                    <CircledIconButton type="submit" text="Sign in" icon="" />
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
        <div className={styles.login__container}>
          <div className={styles.login__form}>
            <h1>Sign up</h1>
            <p>
              Get access to one of the best Eshoping services in the world.
            </p>
            <Formik
              enableReinitialize
              initialValues={{
                name,
                email,
                password,
                confirmPassword
              }}
              onSubmit={() => { }}
              validateOnChange={false}
              validationSchema={registerValidation}
            >
              {
                (form) => (
                  <Form>
                    <LoginInput
                      type="text"
                      name="name"
                      icon="USER"
                      placeholder='Full Name'
                      onChange={handleChange}
                    ></LoginInput>
                    <LoginInput
                      type="text"
                      name="email"
                      icon="EMAIL"
                      placeholder='Email'
                      onChange={handleChange}
                    ></LoginInput>
                    <LoginInput
                      type="password"
                      name="password"
                      icon="PASSWORD"
                      placeholder='Enter Password'
                      onChange={handleChange}
                    ></LoginInput>
                    <LoginInput
                      type="password"
                      name="confirmPassword"
                      icon="PASSWORD"
                      placeholder='Re-type Password'
                      onChange={handleChange}
                    ></LoginInput>
                    <CircledIconButton type="submit" text="Sign up" icon="" />

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

export async function getServerSideProps(context: any) {
  const providers = Object.values(await getProviders() as any);
  return {
    props: { providers }
  };
}