import { useState } from 'react';
import { Button, Heading, Page, TextArea, TextInput } from '../components';
import { ComponentTypes } from '../components';
import { camelise } from '../utils';

const TEXTAREA_PLACEHOLDER = `[mypolicy]
chan.max_capacity = 5_000_000
min_fee_ppm_delta = 10
base_fee_msat = 2000
`;

const ConfigEditor = ({ nameString, configString }) => {
    console.log(configString, nameString);
    const [config, setConfig] = useState(configString || '');

    // const [name, setName] = useState(nameString || '');
    // const handleNameChange = ({ target: { value } }) => {
    //     setName(camelise(value));
    // };

    const handleConfigChange = ({ target: { value } }) => {
        setConfig(value);
    };

    const handleSave = () => {
        fetch(`http://localhost:3000/api/config`, {
            method: 'POST',
            body: JSON.stringify({ config })
        }).then(d => console.log(d));
    };

    return (
        <Page>
            <Heading type={ComponentTypes.HeadingType.medium}>
                Config Editor
            </Heading>
            <p className="m-4">
                For config options see{' '}
                <a
                    className="underline text-blue-500"
                    href="https://github.com/accumulator/charge-lnd#properties"
                    target="_blank"
                >
                    CONFIG
                </a>
            </p>

            {/* <TextInput
                label="Name this config"
                value={name}
                onChange={handleNameChange}
                placeholder="MyConfig"
            /> */}
            <TextArea
                spellCheck={false}
                placeholder={TEXTAREA_PLACEHOLDER}
                onChange={handleConfigChange}
                value={config}
                additionalClasses="min-h-[300px] max-w-[700px] w-full"
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
        props: { configString: data.config }
    };
}
