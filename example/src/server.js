import app from './app';
import config from './config';

const port = config.get('port');

app.listen(port, () => console.log(`READY @ ${port}`));
