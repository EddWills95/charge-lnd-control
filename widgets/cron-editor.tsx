import React, { useEffect, useState } from 'react';
import { Button, ComponentTypes } from '../components';
import TextInput from '../components/TextInput';
import cronstrue from 'cronstrue';

type Props = {
    cronData: string;
    setCronData: (data: string) => void;
};

const QUICK_CRONS = {
    MINUTE: '* * * * *',
    HOUR: '0 * * * *',
    DAY: '0 0 * * *'
};

const CronEditor = ({ cronData, setCronData }: Props) => {
    const [readableCron, setReadableCron] = useState(
        cronstrue.toString(cronData, { throwExceptionOnParseError: false })
    );

    useEffect(() => {
        setReadableCron(
            cronstrue.toString(cronData, {
                throwExceptionOnParseError: false
            })
        );
    }, [cronData]);

    return (
        <div className="flex flex-col items-center">
            <TextInput
                label="Cron expression:"
                value={cronData}
                onChange={({ target: { value } }) => setCronData(value)}
                additionalClasses="text-center text-xl"
            />

            <p className="text-center italic">{readableCron}</p>

            <div className="flex flex-wrap justify-center">
                <Button
                    type={ComponentTypes.ButtonType.secondary}
                    onClick={() => setCronData(QUICK_CRONS.MINUTE)}
                >
                    Every Min
                </Button>
                <Button
                    type={ComponentTypes.ButtonType.secondary}
                    onClick={() => setCronData(QUICK_CRONS.HOUR)}
                >
                    Every Hour
                </Button>
                <Button
                    type={ComponentTypes.ButtonType.secondary}
                    onClick={() => setCronData(QUICK_CRONS.DAY)}
                >
                    Every Day
                </Button>
            </div>
        </div>
    );
};

export default CronEditor;
