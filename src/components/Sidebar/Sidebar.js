import React from 'react'
import styles from './Sidebar.module.css'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <>
    <ul className={styles.sidebar_list}>
        <li className={styles.list_item}><Link to='/' style={{textDecoration:'inherit',color:'inherit'}}>{`category`.toUpperCase()}</Link></li>
        <li className={styles.list_item}><Link style={{textDecoration:'inherit',color:'inherit'}} to='/credit'>{`credit`.toUpperCase()}</Link></li>
        <li className={styles.list_item}>{`expense`.toUpperCase()}</li>
        <li className={styles.list_item}>{`report`.toUpperCase()}</li>    
    </ul>
    </>
  )
}

export default Sidebar