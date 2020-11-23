import Head from 'next/head'
import { NextPage } from 'next';

import FullPageLogo from '../components/FullPageLogo';

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Scrpttag</title>
            </Head>
            <FullPageLogo />
        </>
    )
}

export default Home
