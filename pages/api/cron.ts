import FileManager, { CRON_LOCATION } from './services/fileManager';

export default function handler(req, res) {
    switch (req.method) {
        case 'GET':
            res.status(200).json({ cron: FileManager.readFile(CRON_LOCATION) });
            break;
        case 'POST':
            const cronData = req.body;

            try {
                FileManager.writeFile(CRON_LOCATION, cronData);
                res.status(200).json();
            } catch (err) {
                console.log(err);
                res.status(500).json('Error saving new schedule');
            }
            break;
        default:
            res.status(403).json('Route only supports GET and POST');
    }
}
