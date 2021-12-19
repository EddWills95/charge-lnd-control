import Head from 'next/head';
import { useEffect, useState } from 'react';
import cronstrue from 'cronstrue';
import { Button, ComponentTypes, Page } from '../components';
import TextInput from '../components/TextInput';
import Select from '../components/Select';
import ConfigSelector from '../widgets/config-selector';
import CronEditor from '../widgets/cron-editor';
import { toast } from 'react-toastify';

export default function Home({ data }) {
    const [cronData, setCronData] = useState(data['cron'] || '* * * * *');

    const handleSaveCron = () => {
        fetch('http://localhost:3000/api/cron', {
            method: 'POST',
            body: cronData
        })
            .then(d => {
                toast('Saved new Cron to file');
            })
            .catch(err => toast('Error saving Cron to file'));
    };

    return (
        <Page>
            <div className="p-4 flex flex-col justify-center">
                <ConfigSelector configs={data?.configs} />

                <CronEditor cronData={cronData} setCronData={setCronData} />

                <div className="flex flex-col items-center">
                    <Button onClick={handleSaveCron}>Save schedule</Button>
                </div>
            </div>
        </Page>
    );
}

export async function getStaticProps(context) {
    const cronRes = await fetch(`http://localhost:3000/api/cron`);
    const configRes = await fetch(`http://localhost:3000/api/config`);
    const { cron } = await cronRes.json();
    const { configs } = await configRes.json();

    if (!cron && !configs) {
        return {
            notFound: true
        };
    }

    return {
        props: { data: { configs, cron } } // will be passed to the page component as props
    };
}
