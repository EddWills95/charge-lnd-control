import Link from 'next/link';
import { Select } from '../components';

type Props = {
    configs?: Array<string>;
};

const defaultProps = {
    configs: []
};

const ConfigSelector = ({ configs }: Props) => {
    return (
        <div className="flex flex-col items-center">
            <Select label="Select Config">
                {configs.length &&
                    configs.map(config => (
                        <option key={config} value={config}>
                            {config}
                        </option>
                    ))}
            </Select>

            <p className="italic underline">
                <Link href="/config-editor">Edit</Link>
            </p>
        </div>
    );
};

ConfigSelector.defaultProps = defaultProps;

export default ConfigSelector;
