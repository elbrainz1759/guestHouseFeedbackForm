import styles from '../styles/Home.module.css'

const Title = (props:any) => {
    return (
        <>
        <h3 className={styles.title}>{props.title}</h3>
        <p className={styles.description}>{props.subTitle}</p>
        </>
    )
}
export default Title