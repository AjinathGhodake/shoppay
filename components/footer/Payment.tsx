import Image from 'next/image';
import styles from './styles.module.scss';

export default function Payment() {
    return (
        <div className={styles.footer__payment}>
            <h3>WE ACCEPT</h3>
            <div className={styles.footer__flexwrap}>
                <Image height={36} width={60} alt="" src="/images/payment/visa.webp" />
                <Image height={36} width={60} alt="" src="/images/payment/mastercard.webp" />
                <Image height={36} width={60} alt="" src="/images/payment/paypal.webp" />
            </div>
        </div>
    );
}
