import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

const SkeletonContainer = ({ children }) => {
    return (
        <div className="skeleton_container" style={{
            border: '1px solid #ccc',
            display: 'block',
            lineHeight: 2,
            padding: '1rem',
            marginBottom: '0.5rem',
            width: 100,
        }}>
            <Skeleton />
        </div>
    )
}

export default SkeletonContainer