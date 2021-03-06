import type { NextPage } from 'next'

import NavBar from '../components/NavBar'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <NavBar/>
    </div>
  )
}

export default Home
