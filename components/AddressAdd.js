import React, {Component} from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';
import firebase from "firebase";
import Lib from '../static/address_lib';
import Account from '../components/Account';

class AddressAdd extends Component {
    style = {
        fontSize: "12pt",
        padding: "5px 10px"
    }

    constructor(props){
        super(props);
        if (this.props.login == false) {
            Router.push('/address');
        }
        this.state = {
            title: '',
            detail: '',
            deadline: '',
            concerns: '',
            message: 'タスクを追加するには以下を入力してください'
        }
        this.logined = this.logined.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDetail = this.onChangeDetail.bind(this);
        this.onChangeDeadline = this.onChangeDeadline.bind(this);
        this.onChangeConcerns = this.onChangeConcerns.bind(this);
        this.doAction = this.doAction.bind(this);
    }

    // login, logout 処理
    logined(){
        console.log('logined.');
    }

    logouted(){
        Router.push('/address');
    }

    // フィールド入力処理
    onChangeTitle(e) {
        this.setState({title: e.target.value});
    }

    onChangeDetail(e){
        this.setState({detail: e.target.value});
    }

    onChangeDeadline(e){
        this.setState({deadline: e.target.value});
    }

    onChangeConcerns(e){
        this.setState({concerns: e.target.value});
    }

    // データの登録処理
    doAction(e){
        
        let db = firebase.firestore();
        // Firestore の登録処理

        let date = new Date(this.state.deadline)
        db.collection('tasks').add({
            title: this.state.title,
            detail: this.state.detail,
            deadline: firebase.firestore.Timestamp.fromDate(date),
            concerns: this.state.concerns,
            publisher: firebase.auth().currentUser.uid,
            state : 'doing'
        })
        .then((doc) => {
            console.log(`追加に成功しました (${doc.id})`);
        })
        .catch((error) => {
            console.log(`追加に失敗しました (${error})`);
        });

        this.setState({
            title: '',
            detail: '',
            deadline: '',
            concerns: '',
            message: '登録しました。'
        })
    }

    render(){
        return (
            <div>
                <Account self={this} onLogined={this.logined}
                onLogouted={this.logouted} />
                <hr />
                <p>{this.state.message}</p>
                {this.props.login
                ?
                <table>
                    <tbody>
                        <tr>
                            <th>タスク名:</th>
                            <td><input type="text" size="30"
                            value={this.state.title}
                            onChange={this.onChangeTitle}/></td>
                        </tr>
                        <tr>
                            <th>タスク詳細:</th>
                            <td><input type="text" size="30"
                            value={this.state.detail}
                            onChange={this.onChangeDetail}/></td>
                        </tr>
                        <tr>
                            <th>期限:</th>
                            <td><input type="date" size="30"
                            value={this.state.deadline}
                            onChange={this.onChangeDeadline}/></td>
                        </tr>
                        <tr>
                            <th>グループ:</th>
                            <td><input type="text" size="30"
                            value={this.state.concerns}
                            onChange={this.onChangeConcerns}/></td>
                        </tr>
                        <tr>
                            <th></th>
                            <td><button onClick={this.doAction}>
                                登録</button></td>
                        </tr>
                    </tbody>
                </table>
                :
                <p>please login...</p>
                }
            </div>
        );
    }
}

AddressAdd = connect((state) => state) (AddressAdd);
export default AddressAdd;