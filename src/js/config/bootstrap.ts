export default function bootstrap() : Promise {
  return new Promise((resolve, reject) => {
    // if you don't resolve this Promise the Application won't start!
    resolve();
  });
};