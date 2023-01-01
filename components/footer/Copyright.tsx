import Link from 'next/link';
import styles from './styles.module.scss';
import { IoLocationSharp } from 'react-icons/io5';
export default function Copyright() {
    return (
        <div className={styles.footer__copyright}>
            <section>©2023 SHOPPAY All Rights Resereved.</section>
            <section>
                <ul>
                    {
                        data.map((link: any) => (
                            <li key={link.name}>
                                <Link href={link.link}>{link.name}</Link>
                            </li>
                        ))
                    }
                    <li>
                        <a>
                            <IoLocationSharp /> India
                        </a>
                    </li>
                </ul>

            </section>
        </div>

    );
}
const data = [
    {
        name: "Privacy Center",
        link: "",
    },
    {
        name: "Privacy & Cookie Policy",
        link: "",
    },
    {
        name: "Manage Cookies",
        link: "",
    },
    {
        name: "Terms & Conditions",
        link: "",
    },
    {
        name: "Copyright Notice",
        link: "",
    },
];
