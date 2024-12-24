import React from 'react'
import logo from '../../../static/img/mystiko-logo-black.svg'
import styles from '../../../src/css/banner.module.css'

const Banner = () => {
    return (
        <div className={styles.banner__container}>
            <div className={styles.banner__text}>
                <h2>Mystiko Docs</h2>
                <p>
                    Mystiko.Network offers a secure, interoperable ZK environment for both regular users and developers. Developers can build any dApp powered by Mystiko.Network via simple integration of Mystiko's universal ZK SDK.
                </p>
            </div>
            <img className={styles.banner__image} src='/img/mystiko-logo-white.svg' alt="Reown Banner" />
        </div>
    )
}

export default Banner
