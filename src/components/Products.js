import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Product } from './Product'

export class Products extends Component {
    render() {
        return (
            <section className="section">
                <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
                <div className="row">
                    {/* <!-- Product --> */}
                    <Product />
                    <Product />
                    <Product />
                </div>
            </section>

        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Products)
