
import React from 'react';
import styles from './toggle.module.css'

const Toggle = ({checked, onClick, title, checkedColor, titleStyle}) => {
    return (
        <div className={styles.container}>
            <p className={styles.title} style={titleStyle}>{title}</p>
            <input type={"checkbox"}
                   className={styles.toggle}
                   onClick={onClick}
                   checked={checked}
                   style={{backgroundColor:checked? '#4421bf':'rgb(245,250,253)'}}
            />
        </div>
    );
};

export default Toggle;