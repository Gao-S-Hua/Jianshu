import React from 'react';
import {connect} from 'react-redux'
import { CSSTransition } from 'react-transition-group';
import {HeaderWrapper} from './style';
import {Logo, Nav, NavItem, SearchInfoSwitch, SearchInfoItem,
    NavSearch,Addition, Button,SearchWrapper, SearchInfo,SearchInfoList,
     SearchInfoTitle} from './style';
import {IState} from './store/reducer'
import store from '../../store';
import {actionCreators} from './store'
interface IProps extends IState { 
    handleFocus(list : string[]) :  void;
    handleBlur() :  void;
    handleMouseEnter() : void;
    handleMouseLeave() : void;
    handleListChange() : void;
 };



const Header = (props : IProps) =>{

    const getListArea = (show : boolean, mouseIn : boolean) => {
        if(!show && !mouseIn)
            return null;

        const infoList : string[] = [];
        for(let i = props.page * 10; i < (props.page + 1) * 10 && i < props.list.length; i++){
            infoList.push(props.list[i]);
        }
        
        return(
        <SearchInfo 
        onMouseEnter = {props.handleMouseEnter}
        onMouseLeave = {props.handleMouseLeave}
        > 
            <SearchInfoTitle>
                热门搜索
                <SearchInfoSwitch onClick = {props.handleListChange}>
                换一批
                </SearchInfoSwitch>
            </SearchInfoTitle>
            <SearchInfoList>
                {infoList.map( (item) => {
                    return <SearchInfoItem key = {item}> {item}</SearchInfoItem>
                } )}
            </SearchInfoList>
        </SearchInfo>
        );
    }

        return(
            <HeaderWrapper>
                <Logo href = "/"/>
                <Nav >
                    <NavItem className = "left active">首页</NavItem>
                    <NavItem className = "left">下载APP</NavItem>
                    <NavItem className = "right">
                        <i className = "iconfont">&#xe636;</i>
                    </NavItem>
                    <NavItem className = "right">登陆</NavItem>
                    <SearchWrapper>
                    <CSSTransition
                    in = {props.focused}
                    timeout = {400}
                    classNames = "slide"
                    >
                    <NavSearch 
                    className = {props.focused ? "focused" : ""}
                    onFocus = {() => props.handleFocus(props.list)}
                    onBlur = {props.handleBlur}
                    />
                    </CSSTransition>
                    <i className = {props.focused ? "iconfont focused" : "iconfont"}>&#xe62b;</i>
                        {getListArea(props.focused, props.mouseIn)}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className = "write">
                    <i className = "iconfont">&#xe62c;</i>
                        写文章</Button>
                    <Button className = "reg">注册</Button>
                </Addition>
            </HeaderWrapper>
        );
}

const handleFocus = (list : string[]) => {
    store.dispatch(actionCreators.searchFocus());
    (list.length === 0) && store.dispatch(actionCreators.getList() as any);
}
const handleBlur = () => {
    store.dispatch(actionCreators.searchBlur());
}

const handleMouseEnter = () => {
    store.dispatch(actionCreators.mouseEnter());
}

const handleMouseLeave = () => {
    store.dispatch(actionCreators.mouseLeave());
}

const handleListChange = () => {
    store.dispatch(actionCreators.listChange());
}

const mapStateToProps = (state : {header : any }) => {
    return {
        focused : state.header.get("focused"),
        mouseIn : state.header.get("mouseIn"),
        list : state.header.get("list").toJS(),
        page : state.header.get("page"),
        totalPage : state.header.get("totalPage")
    }
}

const mapDispatchToProps = () => {
    return {handleFocus, handleBlur,handleMouseEnter,handleMouseLeave,handleListChange};
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
