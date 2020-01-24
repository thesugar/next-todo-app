import { Component } from 'react';
import {initStore} from '../store';
import firebase from "firebase";

const isServer = typeof window === 'undefined';
const _NRS_ = '__NEXT_REDUX_STORE__';

var auth = () => {        
    return new Promise((resolve, reject) => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                var user_info = user_info || firebase.auth().currentUser;
                console.log(user_info);//ここでは取れる
                resolve(user_info);
            } else {
                console.log('// No user is signed in.');
                reject({
                    message: 'APIにアクセスできませんでした'
                });
            }
        });
    });
};

function getOrCreateStore (initialState) {
    //auth().then(()=>{
    if (isServer) {
        return initStore(initialState);
    }

    if (!window[_NRS_]) {
        //console.log('**check**')
        //console.log(auth());
        //initialState['login'] = auth() ? true : false;
        //initialState['username'] = auth() ? auth().displayName : 'Guest';
        window[_NRS_] = initStore(initialState);
    }

    return window[_NRS_];//});
}

export default (App) => {
    return class AppWithRedux extends Component {

        static async getInitialProps (appContext) {
            const reduxStore = await getOrCreateStore();
            appContext.ctx.reduxStore = reduxStore;
            let appProps = {};
            if (typeof App.getInitialProps === 'function') {
                appProps = await App.getInitialProps(appContext);
            }
            return {
                ...appProps,
                initialReduxState: reduxStore.getState()
            }
        }

        constructor (props) {
            super(props)
            this.reduxStore = getOrCreateStore (props.initialReduxState)
        }

        render () {
            return <App {...this.props}
                reduxStore={this.reduxStore} />
        }
    }
}