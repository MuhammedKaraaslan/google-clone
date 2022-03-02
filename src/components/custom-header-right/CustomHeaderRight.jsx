import React from 'react'

import { Link } from 'react-router-dom'

import { AppsContainer, AvatarContainer, CustomHeaderRightContainer } from './CustomHeaderRight.styles'

function CustomHeaderRight() {
    return (
        <CustomHeaderRightContainer>
            <Link to='/gmail'>Gmail</Link>
            <Link to='/images'>Images</Link>
            <AppsContainer />
            <AvatarContainer />
        </CustomHeaderRightContainer>
    )
}

export default CustomHeaderRight