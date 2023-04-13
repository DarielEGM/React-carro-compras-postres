import {Component} from 'react'

const styles={
    logo:{
        fontWeigth:'700',
        fomntSize:'2rem'
    }
}

class Logo extends Component{
    render(){
        return(
                <div style={styles.logo}>
                        Shop 
                </div>
        )
    }
}

export default Logo