import React from 'react'
import './CoreLayout.css'
import { Header } from '../../common/header'

export const CoreLayout = ({ children }) => (
    <div className="app">
        <Header />
        {children}
    </div>
)

CoreLayout.propTypes = {
    children : React.PropTypes.element.isRequired
}

export default CoreLayout