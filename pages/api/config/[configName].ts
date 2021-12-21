import FileManager, { CONFIG_LOCATION } from '../services/fileManager';

export default function handler(req, res) {
    switch (req.method) {
        case 'GET':
            try {
                const { configName } = req.query;
                const config = FileManager.readFile(
                    CONFIG_LOCATION + '/' + configName
                );
                res.status(200).json(JSON.stringify({ config }));
            } catch (err) {
                console.log(err);
                res.status(500).json('Error reading config file');
            }
            break;
        case 'POST':
            try {
                console.log(req.body);
                const { configName } = req.body;
                FileManager.writeFile(
                    CONFIG_LOCATION + '/' + configName,
                    req.body
                );
                res.status(200);
            } catch (err) {
                console.log(err);
                res.status(500).json('Error writing config file');
            }
            break;
        default:
            res.status(403).json('Route only supports GET and PUT');
    }
}
