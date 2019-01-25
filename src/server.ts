import app from './app';

const PORT = process.env.port || 3000;

app.listen(PORT, (err: Error) => {

  if (err) {
    // tslint:disable-next-line:no-console
    console.log(err);
    return err;
  }
  // tslint:disable-next-line:no-console
  console.log('Express server listening on port ' + PORT);
});
