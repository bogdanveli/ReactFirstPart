import React, {Component} from 'react'
import axios from 'axios'

class PostForm extends Component{
    constructor(props){
        super(props)

        this.state = {
            userID: '',
            userPassword: '',
            email: ''
        }
    }

    ChangeHandler = e =>{
        this.setState({  [e.target.name]: e.target.value  })   //dovolno e eden poradi target.name od metodot 'name' od input
    }

    
    SubmitHandler = e =>{
        e.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
            .then(response =>{
                console.log(response)
            })
            .catch(error =>{
                console.log(error)
            })
    }


    render() {

        const {userID, userPassword, email  } = this.state
        
        return(
            <div>

                <form onSubmit = {this.SubmitHandler}>
                    <div>
                        ID:<input
                         type = 'text'
                         name = 'userID' 
                         value = {userID}
                         onChange = {this.ChangeHandler}
                         ></input>
                    </div>

                    <div>
                    Password: <input
                         type = 'text'
                         name = 'userPassword' 
                         value = {userPassword}
                         onChange = {this.ChangeHandler}
                         ></input>
                    </div>

                    <div>
                    E-mail: <input
                         type = 'text'
                         name = 'email' 
                         value = {email}
                         onChange = {this.ChangeHandler}
                         ></input>
                    </div>
                    
                    <button type='submit'>Submit</button>
                    
                </form>

            </div>
        )
    }
}

export default PostForm