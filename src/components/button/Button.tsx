import { IButtonProps } from './Button.types'
import styles from './Badge.module.scss'

const Button: React.FC<IButtonProps> = ({ text }) => {
    return (
        <div className={styles['button']}>
            <div className="text-green-500">{text}</div>
        </div>
    )
}
export default Button
