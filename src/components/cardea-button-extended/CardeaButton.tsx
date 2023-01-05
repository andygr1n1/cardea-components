// import './CardeaButton.scss'

import { Button } from 'antd'
import { IButtonProps } from './CardeaButton.types'

const CardeaButtonExtended: React.FC<IButtonProps> = props => {
    return (
        <>
            <Button {...props} className={`cardea-button ${props.className ?? ''}`}>
                {props.children}
            </Button>
            <Button {...props} className={`cardea-button ${props.className ?? ''}`}>
                {props.children}
            </Button>
            <Button {...props} className={`cardea-button ${props.className ?? ''}`}>
                {props.children}
            </Button>
            <Button {...props} className={`cardea-button ${props.className ?? ''}`}>
                {props.children}
            </Button>
            <Button {...props} className={`cardea-button ${props.className ?? ''}`}>
                {props.children}
            </Button>
            <Button {...props} className={`cardea-button ${props.className ?? ''}`}>
                {props.children}
            </Button>{' '}
            <Button {...props} className={`cardea-button ${props.className ?? ''}`}>
                {props.children}
            </Button>
            <Button {...props} className={`cardea-button ${props.className ?? ''}`}>
                {props.children}
            </Button>
            <Button {...props} className={`cardea-button ${props.className ?? ''}`}>
                {props.children}
            </Button>
            <Button {...props} className={`cardea-button ${props.className ?? ''}`}>
                {props.children}
            </Button>
        </>
    )
}

export default CardeaButtonExtended
