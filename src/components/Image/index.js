import classNames from 'classnames';
import images from '~/assets/images';
import { forwardRef, useState } from 'react';
import styles from './Images.module.scss';

const Image = forwardRef(({ src, alt, className, fallBack: customFallback = images.noImage, ...props }, ref) => {
    const [fallBack, setFallBack] = useState('');

    const handleError = () => {
        setFallBack(customFallback);
    };
    return (
        <img
            ref={ref}
            src={fallBack || src}
            alt={alt}
            className={classNames(styles.wrapper, className)}
            {...props}
            onError={handleError}
        />
    );
});

export default Image;
