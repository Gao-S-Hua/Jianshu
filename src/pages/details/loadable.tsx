import Loadable from 'react-loadable';
import {RouteComponentProps} from 'react-router-dom';
import React from 'react';

interface IProps extends RouteComponentProps {};
const LoadableComponent : LoadableExport.OptionsWithRender<IProps,any> = {
  loader: () => import('./index'),
  loading: () => (<div>Loading</div>),
  render(loaded : any, props : IProps){
    const Component: any = loaded.default; // tslint:disable-line:variable-name
    return <Component{...props} />
  }
};

export default Loadable(LoadableComponent)