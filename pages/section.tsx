import styles from "../styles/Home.module.css";

export function Section(props: any) {

  return (
    <div className={styles.section}>
      {/* section containing title, short description and link towards the github repo,
      idealy information fetched from a database
      */}
      <div className={styles.card}>
        <h3>
          {props.title}
        </h3>
        <p>
          {props.description}
        </p>
      </div>
    </div>

  )
}