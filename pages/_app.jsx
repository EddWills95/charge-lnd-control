import '../styles/globals.css';
import { ComponentTypes, Heading } from '../components';
import Head from 'next/head';
import Link from 'next/link';
import App from 'next/app';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
    return (
        <div className="flex flex-col items-center bg-gradient-to-br from-blue-700 via-blue-800 to-gray-900 h-screen">
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;1,300&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;1,300&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <ToastContainer />

            <header className="flex justify-evenly w-screen p-4 sm:w-10/12">
                <Heading
                    type={ComponentTypes.HeadingType.medium}
                    additionalClasses="hover:underline"
                >
                    <Link href="/">Home</Link>
                </Heading>
                <Heading type={ComponentTypes.HeadingType.extraLarge}>
                    <em>charge-lnd</em>⚡️ store🔋
                </Heading>
                <Heading
                    type={ComponentTypes.HeadingType.medium}
                    additionalClasses="hover:underline"
                >
                    <Link href="/logs">Logs</Link>
                </Heading>
            </header>

            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;
