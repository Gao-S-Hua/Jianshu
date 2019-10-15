import React from 'react';
import { connect } from 'react-redux';
import {TopicWrapper, TopicItem} from '../styles'


const Topics  = (props : any) => {
   return(
    <TopicWrapper>
        {props.topicList.map( (item: any) => (
            <TopicItem key = {item.get('id')}>  
                <img className = 'topic-pic'
                src = {item.get('imgURL')}
                alt = "empty"
                />
                {item.get('title')}
            </TopicItem>
        ) ) }
    </TopicWrapper>
   );
}

const mapState = (state : any) => {
    return {topicList : state.home.get('topicList')};
}
export default connect(mapState, null)(Topics);