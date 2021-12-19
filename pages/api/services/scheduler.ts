var cron = require('node-cron');
import FileManager, { CRON_LOCATION } from './fileManager';

class Scheduler {
    cronExpression;
    cronTask;

    async setup() {
        // Get existing data and set up the cron
        this.cronExpression = this.getCron();
        if (this.cronExpression) {
            this.cronTask = cron.schedule(this.cronExpression, () => {
                // Run the charge-lnd thing
            });
        }
    }

    getCron() {
        return FileManager.readFile(CRON_LOCATION);
    }

    setCron(newCron) {
        return FileManager.writeFile(CRON_LOCATION, newCron);
    }
}

const scheduler = new Scheduler();

export default scheduler;
