import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import { Button, ComponentTypes, Page } from '../components';
import { hashFromString } from '../utils';

const Logs = ({ logs }) => {
    console.log(logs);

    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [logs]);

    const router = useRouter();

    const refreshLogs = () => {
        router.replace(router.asPath);
    };

    return (
        <Page>
            <Button
                type={ComponentTypes.ButtonType.secondary}
                onClick={refreshLogs}
                additionalClasses="ml-auto"
            >
                Refresh ↺
            </Button>
            <div className="mt-4 p-4 bg-white rounded-md h-96 w-10/12 shadow-inner overflow-scroll">
                {logs.map(log =>
                    log.length ? (
                        <p
                            key={hashFromString(log)}
                            className="monospace overflow-scroll text-black"
                        >
                            {log}
                        </p>
                    ) : null
                )}
                <div ref={messagesEndRef} />
            </div>
        </Page>
    );
};

export default Logs;

export async function getStaticProps(context) {
    const res = await fetch('http://localhost:3000/api/logs');
    const { logs } = await res.json();

    if (!logs) {
        return {
            notFound: true
        };
    }

    return {
        props: { logs: logs.split(/\r?\n/) }
    };
}
