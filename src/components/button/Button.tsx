import { IButtonProps } from './Button.types'
import styles from './Button.module.scss'

const Button: React.FC<IButtonProps> = ({ text }) => {
    return (
        <div>
            <div className={styles['button']}>{text}</div>
        </div>
    )
}
export default Button
