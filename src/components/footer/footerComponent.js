import React from 'react'
import styles from './footer.module.css'

class Footer extends React.Component{   
    render(){
        return(
            <footer >
                <p className={styles.copyRight}> © Created by Art Sahakyan</p>
            </footer>
        )
    }
}
export default Footer