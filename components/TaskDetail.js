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
        // 個別タスクのページを直接開いてそこでログインを行った場合のみ
        // ここで Firestore からのデータ取得が行われる。
        // タスク一覧から遷移した場合は props を読むので Firestore との通信は行われない（はず）。
        if (firebase.auth().currentUser == undefined ||
            firebase.auth().currentUser == null) { return;}

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
        res.push(<li key={i}>
                <Link href="/p/[id]" as={`/p/${data[i]['title']}`} info={data[i]}>
                    <a>{data[i]['title']}</a>
                 </Link>
                    <ul>
                        <li key={1}>{data[i]['detail']}</li>
                        <li key={2}>{new Date(data[i]['deadline'].seconds * 1000).toLocaleDateString()}</li>
                    </ul>
                </li>);
        }
        return res;
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
                    <div>
                    <h1>{this.props.taskData[this.props.docId]['title']}</h1>
                    <h2>詳細</h2>
                    <h3>{this.props.taskData[this.props.docId]['detail']}</h3>
                    <h2>状態</h2>
                    <h3>{this.props.taskData[this.props.docId]['state']}</h3>
                    <h2>期日</h2>
                    <h3>{new Date(this.props.taskData[this.props.docId]['deadline'].seconds * 1000).toLocaleDateString()}</h3>
                    <h2>このタスクの登録者</h2>
                    <h3>{this.props.taskData[this.props.docId]['publisher']}</h3>
                    <h2>グループ名</h2>
                    <h3>{this.props.taskData[this.props.docId]['concerns']}</h3>
                    <p>タスクの内容を編集する</p>
                    <p>タスクを削除する</p>
                    </div>
                    }
                </ul>
            </div>
        )
    }
}

Address = connect((state) => state)(Address);
export default Address;