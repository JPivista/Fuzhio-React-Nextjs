import React from 'react'
import { Container, Image } from 'react-bootstrap'

import WhoAreWe from './WhoAreWe'

const HomeBanner = () => {
    return (
        <>
            <Container fluid className='p-0 h-100'>
                <Image src="/home/home_banner.jpg" width='100%' />
                <h1 className='z-3'>Making markets work for vulnerable communities</h1>
            </Container>

            <WhoAreWe />
        </>
    )
}

export default HomeBanner