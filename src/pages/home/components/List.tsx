import React from 'react';
import { connect } from 'react-redux';
import {ListItem, ListInfo} from '../styles';
import {Link } from 'react-router-dom';

const List  = (props : any) => {
   return(
        <div>
        {props.articleList.map((item: any) => (
        <Link key = {item.get('id')} to = {'/details?id=' + item.get('id')}>
        <ListItem >
             <img className = 'pic' alt = 'error' src = {item.get('imgURL') } /> 
            <ListInfo> 
                <h3 className = 'title'>{item.get('title')}</h3>
                <p className = 'desc'>
                {item.get('desc')}
                </p>
            </ListInfo>
       </ListItem>
       </Link>
        ))}
        </div>
   );
}
const mapState = (state : any) => {
    return {articleList : state.home.get('articleList')};
}
export default connect(mapState, null)(List);