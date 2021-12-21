import path from 'path';
import FileManager, { CONFIG_LOCATION } from './services/fileManager';

export default function handler(req, res) {
    switch (req.method) {
        case 'GET':
            try {
                const config = FileManager.readFile(CONFIG_LOCATION);
                res.status(200).json(JSON.stringify({ config }));
            } catch (err) {
                console.log(err);
                res.status(500).json('Error reading config folder');
            }
            break;
        case 'POST':
            const { config } = JSON.parse(req.body);

            try {
                FileManager.writeFile(path.join(CONFIG_LOCATION), config);
                res.status(200).json();
            } catch (err) {
                console.log(err);
                res.status(500).json('Error saving new config');
            }
            break;
        default:
            res.status(403).json('Route only supports GET and POST');
    }
}
