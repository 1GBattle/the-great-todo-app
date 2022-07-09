import React from "react";


import styles from "../styles/NavBar.module.css";

const NavBar = () => {
  return (
    <div className= {'gradient container ' + styles.navContainer} >
      <h1 className={styles.pageTitle}>
        The Great Todo App
      </h1>
      <button className={styles.addTodoBtn + ' gradient btn'}>Add New</button>
    </div>
  )
}

export default NavBar;