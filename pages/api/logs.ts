import FileManager, { LOG_LOCATION } from './services/fileManager';

export default function handler(req, res) {
    switch (req.method) {
        case 'GET':
            try {
                const logs = FileManager.readFile(LOG_LOCATION);
                res.status(200).json({ logs });
            } catch (err) {
                console.log(err);
                res.status(500).json('Error reading log file');
            }
            break;
        default:
            res.status(403).json('Route only supports GET');
    }
}
