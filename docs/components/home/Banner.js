import React from 'react'
import logo from '../../../static/img/mystiko-logo-black.svg'
import styles from '../../../src/css/banner.module.css'

const Banner = () => {
    return (
        <div className={styles.banner__container}>
            <div className={styles.banner__text}>
                <h2>WalletConnect Docs</h2>
                <p>
                    WalletConnect gives developers the tools to build user experiences that make digital ownership effortless, intuitive, and secure.
                </p>
            </div>
            <div className={styles.banner__backdrop} />
            <img className={styles.banner__image} src={logo} alt="WalletConnect Logo" />
        </div>
    )
}

export default Banner
