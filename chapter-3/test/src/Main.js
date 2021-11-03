import React, {Component} from 'react'
import Sub1 from './Sub1'

export default class Main extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            user: '',
            pass: ''
        }
    }

    render(){
        const doSubmit = e => this.doSubmit(e)
        const doChange = e => this.doChange(e)
        
        return (
            <form onSubmit={doSubmit}>
                <label>
                    ユーザ名: <br />
                    <input type="text" 
                        name='user'
                        ref={ (i) => {this.user = i}}
                        value={this.state.user}
                        onChange={doChange}/>
                    <br />
                </label>
                <label>
                    パスワード: <br />
                    <input type="password" 
                        name='pass'
                        ref={ (i) => {this.pass = i}}
                        value={this.state.pass}
                        onChange={doChange}/>
                    <br />
                </label>
                <input type="submit" value='送信'/>
            </form>
        )
    }

    doChange(e){
        const key = e.target.name
        this.setState({
            [key]: e.target.value
        })
    }

    doSubmit(e){
        if(!this.state.user){
            this.user.focus()
            return
        }
        if(!this.state.pass){
            this.pass.focus()
            return
        }
        window.alert(JSON.stringify(this.state))
    }
}

