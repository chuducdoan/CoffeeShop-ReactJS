import classNames from 'classnames/bind';

import {Link} from 'react-router-dom';
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
    secondary,
    small, 
    to,
    fullWidth,
    ...passProp
    }) {
        
    const props = {
        handleOnClick,
        ...passProp
    }
    let Comp = 'button';

    if(to) {
        Comp = Link;
        props.to = to;
    }

    const classes = cx('wrapper', {
        buttonIconsRounded,
        buttonIconGoogle, 
        buttonIconFacebook, 
        buttonIconTwitter, 
        buttonText,
        primary,
        secondary,
        small,
        fullWidth
    })

    return ( 
        <Comp className={classes} onClick={handleOnClick} {...props}>{children}</Comp>
    );
}

export default Button;