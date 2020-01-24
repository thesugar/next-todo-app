import React, {Component} from 'react';
import {connect} from 'react-redux';
import Router from 'next/router';
import firebase from "firebase";
import Lib from '../static/address_lib';
import Account from '../components/Account';
import Link from 'next/link';

class Address extends Component {
    style = {
        fontSize: "12pt",
        padding: "5px 10px"
    }

    constructor(props){
        super(props);
        this.logined = this.logined.bind(this);
    }

    // login, logout 処理
    logined(){
        this.getFireData();
    }

    logouted(){
        Router.push('/address');
    }

    // get data from Firebase
    getFireData() {
        if (firebase.auth().currentUser == undefined ||
            firebase.auth().currentUser == null) { return;}

        let db = firebase.firestore(); // firestore のオブジェクト取得
    
        let ref = db.collection('tasks');
        let self = this;
        ref.get()
        .then(function(querySnapshot) {
            let ids = [];
            let d = [];
            let taskdoc = {};

            querySnapshot.forEach((doc, index, querySnapshot) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            //d.push(Lib.deepCopy(doc.data()));
            //ids.push(doc.id);

            taskdoc = Object.assign(taskdoc, {[doc.id] : Lib.deepCopy(doc.data())})
            // d.push してるのにループのたびにdispatchしてるから無駄な部分はある
            // forEach の中で querySnapshot の length が取得できればいいが、、
            self.props.dispatch({
                type: 'UPDATE_USER',
                value: {
                    login: self.props.login,
                    username: self.props.username,
                    email: self.props.email,
                    taskData : taskdoc,
                    //docid : ids,
                    //data: d,
                    items: self.getItem(taskdoc)
                    }
            })
            
        })
        
        });
    }

    // data を元に表示項目を作成
    getItem(taskdoc) {

        //console.log('data is');
        //console.log(data);
        if (taskdoc == undefined) {return;}
        let res = [];
        for (let key in taskdoc){
        res.push(<li key={key}>
                <Link href="/p/[id]" as={`/p/${key}`}>
                    <a>{taskdoc[key]['title']}</a>
                 </Link>
                    <ul>
                        <li key={1}>{taskdoc[key]['detail']}</li>
                        <li key={2}>{new Date(taskdoc[key]['deadline'].seconds * 1000).toLocaleDateString()}</li>
                    </ul>
                </li>);
        }
        return res;
    }
    
    // データ表示ページの移動
    go(email){
        Router.push('/address_show?email=' + email);
    }

    render(){
        return (
            <div>
                <Account onLogined={this.logined}
                 onLogouted={this.logouted} />
                <ul>
                    {this.props.items.length === 0 || this.props.items === undefined || this.props.items === null
                    ?
                    <li key="0">no item.</li>
                    :
                    this.props.items
                    }
                </ul>
            </div>
        )
    }
}

Address = connect((state) => state)(Address);
export default Address;