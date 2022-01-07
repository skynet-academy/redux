import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createPost } from '../actions/postActions'

class Postform extends Component {

    constructor(props){
        super(props)
        this.state = {
            title: '',
            body: ''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    
    onChange(e){
        this.setState({[e.target.name]: e.target.value })
    }
    
    onSubmit(e){
        e.preventDefault()
        const post = {
            title: this.state.title,
            body: this.state.body
        }

        this.props.createPost(post)
    }

    render() {
        return(
            <div>
                <h1>Add your post</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label for="">Title:</label>
                        <input type="text" name="title" onChange={this.onChange} value={this.state.title} />
                    </div>
                    <div>
                        <label for="">Body:</label>
                        <textarea id="" name="body" cols="40" rows="10" onChange={this.onChange} value={this.state.body} />
                    </div>

                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

Postform.propTypes = {
    createPost: PropTypes.func.isRequired
}

export default connect(null, {createPost})(Postform) 
