import { BiUser } from 'react-icons/bi';
import { SiMinutemailer } from 'react-icons/si';
import { IoKeyOutline } from 'react-icons/io5';
import styles from './styles.module.scss';
import { FieldHookConfig, useField } from 'formik';

interface IProps {
    icon: 'USER' | 'EMAIL' | 'PASSWORD';
    placeholder: string;
    type: 'text';
    name: string;
    onChange: any;
}
export default function LoginInput({ icon, placeholder, ...props }: IProps) {
    const [field, meta] = useField(props);
    console.log("props", field);

    return (
        <div className={styles.input}>
            {
                icon === 'USER' ? <BiUser /> : icon === 'EMAIL' ? <SiMinutemailer /> : icon === 'PASSWORD' ? <IoKeyOutline /> : ("")
            }
            <input placeholder={placeholder} {...props} />
        </div>
    );
}
