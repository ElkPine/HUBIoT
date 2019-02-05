// tslint:disable
import app from './app';

const PORT = process.env.port || 3000;

app.listen(PORT, (err: Error) => {
  if (err) {
    console.log(err);
    return err;
  }
  console.log('Express server listening on port ' + PORT);
});
