import React, {Component} from 'react';


import HomeLayout from '../components/homelayout';



class Home extends Component {
   

    goToLibrary = () => {
        
        this.props.navigation.navigate('Lib')
        
    }

    goToInfo = () => {
        
        this.props.navigation.navigate('Info')
        
    }

    render(){

        const propsObjetct = {

            goToLibrary: this.goToLibrary,
            goToInfo: this.goToInfo
        
        }

        
        return(

            <HomeLayout {...propsObjetct}></HomeLayout>
        )
    }

}



export default Home;