import Image from 'next/image';
import Link from 'next/link';
import CustomButton from '../CustomButton/CustomButton';
import styles from './styles.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image src="/logo.svg" alt="Car Logo" width={140} height={40} />
      </Link>
      <CustomButton title="Sign In" />
    </header>
  );
};

export default Header;
