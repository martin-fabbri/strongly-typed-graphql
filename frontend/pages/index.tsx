import * as React from 'react'
import { NextPage } from 'next'
import styled from 'styled-components'
import {
    zdColorBlue700,
    zdFontSizeLg,
    zdSpacing,
} from '@zendeskgarden/css-variables'

import SignInForm from '../components/sign-in-form'

interface InitialProps {
    loggedInUser: boolean
}

const Title = styled.h1`
    margin-bottom: ${zdSpacing};
    color: ${zdColorBlue700};
    font-size: ${zdFontSizeLg};
`

const IndexPage: NextPage<InitialProps> = () => {
    return (
        <>
            <Title>Sign In</Title>
            <SignInForm />
        </>
    )
}

export default IndexPage
