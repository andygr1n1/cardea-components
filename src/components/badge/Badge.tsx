import { IBadgeProps } from './Badge.types'
import styles from './Badge.module.scss'

const Badge: React.FC<IBadgeProps> = ({ count }) => {
    return (
        <div className={styles['badge']}>
            <div className="text-green-500">{count}</div>
        </div>
    )
}
export default Badge
