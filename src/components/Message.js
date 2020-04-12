import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Message extends Component {
    render() {
        return (
            <h3>
              <span className="badge amber darken-2">Mua Hàng Thành Công !</span>
            </h3>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Message)
