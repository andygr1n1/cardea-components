import { IBadgeProps } from './Badge.types'
import styles from './Badge.module.scss'

const Badge: React.FC<IBadgeProps> = ({ count }) => {
    return (
        <div>
            <div className={styles['badge']}>{count}</div>
        </div>
    )
}
export default Badge
