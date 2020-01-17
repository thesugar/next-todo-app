import React, {Component} from 'react';
import {connect} from 'react-redux';
import Router from 'next/router';
import firebase from "firebase";
import Lib from '../static/address_lib';
import Account from '../components/Account';

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
        if (this.props.email == undefined ||
            this.props.email == '') { return;}
        let email = Lib.encodeEmail(this.props.email);
        let db = firebase.firestore(); // firestore のオブジェクト取得
    
        let ref = db.collection('tasks');
        let self = this;
        ref.get()
        .then(function(querySnapshot) {
            let d = [];

            querySnapshot.forEach((doc, index, querySnapshot) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            d.push(Lib.deepCopy(doc.data()));
            
            // d.push してるのにループのたびにdispatchしてるから無駄な部分はある
            // forEach の中で querySnapshot の length が取得できればいいが、、
            self.props.dispatch({
                type: 'UPDATE_USER',
                value: {
                    login: self.props.login,
                    username: self.props.username,
                    email: self.props.email,
                    data: d,
                    items: self.getItem(d)
                    }
            })
            
        })
        
        });
    }

    // data を元に表示項目を作成
    getItem(data) {
        console.log('data is');
        console.log(data);
        if (data == undefined) {return;}
        let res = [];
        for (let i=0; i < data.length; i++){
        res.push(<li key={data[i]['id']}>
                    {data[i]['title']}
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
                    {this.props.items == []
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