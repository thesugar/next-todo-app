import React, {Component} from 'react';
import {connect} from 'react-redux';
import firebase from "firebase";
import Lib from '../static/address_lib';
import Account from '../components/Account';
import Router from 'next/router';

class AddressShow extends Component {
    style = {
        fontSize: "12pt",
        padding: "5px 10px"
    }

    constructor(props){
        super(props);
        if (this.props.login == false){
            Router.push('/address');
        }
        this.state = {
            last: -1,
            input: '',
            email: Router.query.email,
            address: null,
            message: Router.query.email + 'のデータ'
        }
        this.logined = this.logined.bind(this);
        this.doChange = this.doChange.bind(this);
        this.doAction = this.doAction.bind(this);
    }

    // login, logout 処理
    logined(){
        console.log('logined.')
    }

    logouted(){
        Router.push('/address');
    }

    // アドレスデータの検索
    getAddress(email){
        let db = firebase.firestore();

    }

    // フィールド入力
    doChange(e){
        this.setState({
            input: e.target.value
        });
    }

    // メッセージ送信処理
    doAction(){
        let from = Lib.encodeEmail(this.props.email);
        let to = Lib.encodeEmail(this.state.email);
        let db = firebase.firestore();
        let d = new Date().getTime();
        
    }

    render(){
        if (this.state.address == null){
            this.getAddress(Router.query.email);
        }
        let items = [];
        if (this.state.address != null){
            for(let n in this.state.address.messages){
                items.unshift(<li key={n}>
                    {this.state.address.messages[n]}
                    </li>);
            }
        }

        return (
            <div>
                <Account onLogined={this.logined}
                onLogouted={this.logouted} />
                <p>{this.state.message}</p>
                <hr />
                {this.state.message != null
                ?
                <table>
                    <tbody>
                        <tr>
                            <th>NAME</th>
                            <td>{this.state.name}</td>
                        </tr>
                        <tr>
                            <th>MAIL</th>
                            <td>{this.state.email}</td>
                        </tr>
                        <tr>
                            <th>TEL</th>
                            <td>{this.state.tel}</td>
                        </tr>
                        <tr>
                            <th>NEMO</th>
                            <td>{this.state.memo}</td>
                        </tr>
                    </tbody>
                </table>
                :
                <p>no-address</p>
                }
                <hr />
                <fieldset>
                    <p>Message: </p>
                    <input type="text" size="40"
                    value={this.state.input}
                    onChange={this.doChange} />
                    <button onClick={this.doAction}>send</button>
                </fieldset>
                {this.state.address != null &&
                this.state.address.messages != null
                ?
                <div>
                    <p>※{this.state.address.name}さんとのメッセージ</p>
                    <ul>{items}</ul>
                </div>
                :
                <p>※メッセージはありません。</p>
                }
            </div>
        );
    }
}

AddressShow = connect((state) => state)(AddressShow);
export default AddressShow;