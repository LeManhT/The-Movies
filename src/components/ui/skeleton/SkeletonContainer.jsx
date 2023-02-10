import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

const SkeletonContainer = ({ count, width, height, marginRight }) => {
    return (
        <SkeletonTheme color="#202020" highlightColor="#444" baseColor='rgba(255, 255, 255, 0.3)'>
            <p style={{ marginBottom: '1em', marginRight: marginRight }}>
                <Skeleton count={count} width={width} height={height} />
            </p>
        </SkeletonTheme>
    )
}

export default SkeletonContainer