import React from 'react';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import axios from 'axios';

type detail = {
    title : string;
    content : string;
}

const defaultState : detail = {title : 'null', content : 'null'};

interface IProps extends RouteComponentProps {};
interface IState {data : detail}
class Details extends React.Component <IProps,IState>{
    constructor(props: IProps){
        super(props);
        this.state = {data : defaultState};
    }


    componentDidMount(){
        console.log(this.props);
        const {id}  =  this.props.location.search as any;
        axios.get('/api/detail.json?id=' + id).then(res => {this.setState(() => ({data : res.data.data}))});
    }

    render(){
        return( 
        <div style = {{width : '60%', margin : 'auto'}}>
            <h1 style = {{fontSize : "20px"}}> <b>{this.state.data.title} </b> </h1>
            <div  dangerouslySetInnerHTML = {{__html : this.state.data.content}}>
            </div>
            <br/>
            <a href = "/">
                Home
            </a>
        </div>
        )
    }
}

// const Details  = (props : IProps) => {
//     let data;
//     const {id} = props.match.params as any;
//     axios.get('/api/detail.json?id=' + id).then(res => {data = res.data; console.log(res.data)});
//     return(
//         <>
//         More Details.
//         <br/>
//         <a href = "/">
//             Home
//         </a>
//         </>
//     );
// }

export default withRouter(Details);