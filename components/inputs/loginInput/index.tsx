import { BiUser } from 'react-icons/bi';
import { SiMinutemailer } from 'react-icons/si';
import { IoKeyOutline } from 'react-icons/io5';
import styles from './styles.module.scss';
import { ErrorMessage, FieldHookConfig, useField } from 'formik';

interface IProps {
    icon: 'USER' | 'EMAIL' | 'PASSWORD';
    placeholder: string;
    type: 'text' | 'password';
    name: string;
    onChange: any;
}
export default function LoginInput({ icon, placeholder, ...props }: IProps) {
    const [field, meta] = useField(props);
    console.log("Meta ", meta);

    return (
        <div className={`${styles.input} ${meta.touched && meta.error ? styles.error : ""}`}>
            {
                icon === 'USER' ? <BiUser /> : icon === 'EMAIL' ? <SiMinutemailer /> : icon === 'PASSWORD' ? <IoKeyOutline /> : ("")
            }
            <input placeholder={placeholder} {...props} {...field} />
            {meta.touched && meta.error && <div className={styles.error__popup}>
                <span></span>
                <ErrorMessage name={field.name} />
            </div>}
        </div>
    );
}
