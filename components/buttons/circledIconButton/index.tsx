import { BiRightArrowAlt } from 'react-icons/bi';
import styles from './styles.module.scss';
interface ICircledIconButtonProps {
    type: "button" | "submit" | "reset" | undefined;
    text: string;
    icon: string;
}

export default function CircledIconButton({ type, text, icon }: ICircledIconButtonProps) {
    return (
        <button className={styles.button} type={type}>
            {text}
            <div className={styles.svg__wrap}>
                <BiRightArrowAlt />

            </div>
        </button>
    );
}
