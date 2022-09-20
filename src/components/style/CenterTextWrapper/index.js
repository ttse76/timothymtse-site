import styles from 'styles/components/style/CenterTextWrapper.module.css';

export default function CenterTextWrapper({ children }) {
  return (
    <div className={styles.center}>
      {children}
    </div>
  );
  
}