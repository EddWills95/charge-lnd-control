import { useState } from 'react';
import { Button, Page, TextArea, TextInput } from '../components';

const TEXTAREA_PLACEHOLDER = `[mypolicy]
chan.max_capacity = 5_000_000
min_fee_ppm_delta = 10
base_fee_msat = 2000
`;

const ConfigEditor = ({ data }) => {
    const [name, setName] = useState(data['name']);
    const [config, setConfig] = useState(data['config'] || '');

    const handleNameChange = ({ target: { value } }) => {
        setName(value);
    };

    const handleChange = ({ target: { value } }) => {
        setConfig(value);
    };

    const handleSave = () => {
        fetch('http://localhost:3000/api/config', {
            method: 'POST',
            body: JSON.stringify({ config, name })
        }).then(d => console.log(d));
    };

    return (
        <Page>
            <h1>Config Editor</h1>
            <p>
                For config options see{' '}
                <a
                    className="underline text-blue-500"
                    href="https://github.com/accumulator/charge-lnd#properties"
                    target="_blank"
                >
                    CONFIG
                </a>
            </p>

            <TextInput
                label="Name this config"
                value={config.name}
                onChange={handleNameChange}
            />
            <TextArea
                className="text-black"
                spellCheck={false}
                placeholder={TEXTAREA_PLACEHOLDER}
                onChange={handleChange}
                value={config}
            ></TextArea>

            <Button onClick={handleSave}>Save</Button>
        </Page>
    );
};

export default ConfigEditor;

export async function getStaticProps(context) {
    const res = await fetch(`http://localhost:3000/api/config`);
    const data = await res.json();

    if (!data) {
        return {
            notFound: true
        };
    }

    return {
        props: { data }
    };
}
