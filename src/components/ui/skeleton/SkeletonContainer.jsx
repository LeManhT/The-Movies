import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

const SkeletonContainer = ({ count, width, height }) => {
    return (
        <SkeletonTheme color="#202020" highlightColor="#444" >
            <p style={{ marginBottom: '1em' }}>
                <Skeleton count={count} width={width} height={height} />
            </p>
        </SkeletonTheme>
    )
}

export default SkeletonContainer