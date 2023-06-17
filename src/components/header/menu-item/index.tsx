import { FunctionComponent } from "react"
import styles from './menu-item.module.css';

interface IMenuItem{
    icon: FunctionComponent
    text: string
}
export const MenuItem = ({icon, text}: IMenuItem) => {
    const Icon = icon
    return <div className={styles.container}>
        <Icon />
        <p>{text}</p>
    </div>
}
