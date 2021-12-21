const { readdirSync, readFileSync, writeFileSync } = require('fs');

export const CRON_LOCATION = `${process.env.CRON_LOCATION}/crondata.txt`;
export const LOG_LOCATION = `${process.env.LOG_LOCATION}`;
export const CONFIG_LOCATION = `${process.env.CONFIG_LOCATION}/config`;

class FileManager {
    readFile = fileLocation => {
        try {
            const buffer = readFileSync(fileLocation);
            return buffer.toString();
        } catch (err) {
            console.log(err);
            throw new Error('Error reading file');
        }
    };

    readConfigFiles = () => {
        try {
            const fileNames = readdirSync(CONFIG_LOCATION);
            return fileNames.map(name => name);
        } catch (err) {
            console.log(err);
            throw new Error('Error reading config folder');
        }
    };

    writeFile = (fileLocation, newCron) => {
        try {
            return writeFileSync(fileLocation, newCron);
        } catch (err) {
            console.log(err);
            throw new Error('Error writing file');
        }
    };
}

const fileManager = new FileManager();

export default fileManager;
