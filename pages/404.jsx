import { useRouter } from 'next/router';
import styles from '../error.module.css';

export default function ErrorPage() {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div>
      <div className={styles.noise}></div>
      <div className={styles.overlay}></div>
      <div className={styles.terminal}>
        <h1>
          Error <span className={styles.errorcode}>404 - Not Found</span>
        </h1>
        <p className={styles.output}>
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <p className={styles.output}>
          Please try to <a onClick={handleGoBack}>go back</a> or <a href="/">return to the homepage</a>. Alternatively,
          talk to us on our <a href="/server">server</a>.
        </p>
      </div>
    </div>
  );
}
