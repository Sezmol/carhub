import Image from 'next/image';
import { footerLinks } from '@/constants';
import styles from './page.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.rights}>
        <div className={styles.logo}>
          <Image src="/logo.svg" alt="logo" width={140} height={40} />
          <p>
            CarHub 2023 <br />
            All Rights Reserved &copy;
          </p>
        </div>
        <div className={styles.links_container}>
          {footerLinks.map((footerLink) => (
            <div key={footerLink.title} className={styles.links_block}>
              <h2>{footerLink.title}</h2>
              <ul>
                {footerLink.links.map((link) => (
                  <li>
                    <a key={link.url} href={link.url}>
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.footer_bottom}>
        <div> &copy; 2023 CarHub All Rights Reserved </div>
        <div className={styles.footer_policy}>
          <a href="/">Privacy & Policy</a>
          <a href="/">Terms & Condition</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
