import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    children, 
    buttonIconsRounded, 
    buttonIconGoogle, 
    buttonIconFacebook, 
    buttonIconTwitter, 
    handleOnClick,
    buttonText,
    primary,
    secondary
    }) {

    const classes = cx('wrapper', {
        buttonIconsRounded,
        buttonIconGoogle, 
        buttonIconFacebook, 
        buttonIconTwitter, 
        buttonText,
        primary,
        secondary
    })

    return ( 
        <button className={classes} onClick={handleOnClick}>{children}</button>
    );
}

export default Button;