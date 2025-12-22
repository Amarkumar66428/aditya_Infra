import React from 'react'

const Skeleton = ({ style }) => {
    return (
        <div style={style || {}} className='skeleton'></div>
    )
}

export default Skeleton