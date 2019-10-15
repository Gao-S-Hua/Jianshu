import React from 'react';
import Topics from './components/Topics';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import List from './components/List';
import {HomeWrapper,HomeLeft, HomeRight} from './styles'
interface IProps {};

const img_url = "https://upload.jianshu.io/admin_banners/web_images/4732/5d0b947b56c13a3d5e96fe8fe77c66079deed975.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
const Home  = (props : IProps) => {
   return(
    <HomeWrapper>
        <HomeLeft >
            <img className='banner-img' alt='' src= {img_url}/>
            <Topics />
            <List />
        </HomeLeft>
        <HomeRight>
            <Recommend />
            <Writer />
        </HomeRight>
        <br/>
    </HomeWrapper>
   );
}

export default Home;