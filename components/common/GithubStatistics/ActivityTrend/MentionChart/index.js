import styles from './styles.module.scss';

export default function MentionChart({ color, label }) {
  return (
    <div className={styles['mention-chart']}>
      <span
        className={styles['circle']}
        style={{
          backgroundColor: color,
        }}
      ></span>
      <label className={styles['label']}>{label}</label>
    </div>
  );
}
