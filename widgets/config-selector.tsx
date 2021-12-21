import Link from 'next/link';
import { useState } from 'react';
import { Select } from '../components';

type Props = {
    configs?: Array<string>;
};

const defaultProps = {
    configs: []
};

const ConfigSelector = ({ configs }: Props) => {
    // const [selectedConfig, setSelectedConfig] = useState<string>(configs[0]);

    return (
        <div className="flex flex-col items-center">
            {/* <Select
                label="Select Config"
                onChange={value => setSelectedConfig(value)}
                value={selectedConfig}
            >
                {configs.length &&
                    configs.map(config => (
                        <option key={config} value={config}>
                            {config}
                        </option>
                    ))}
            </Select> */}

            <p className="italic underline">
                <Link href={`/config`}>Edit Config</Link>
            </p>
        </div>
    );
};

ConfigSelector.defaultProps = defaultProps;

export default ConfigSelector;
