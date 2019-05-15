import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;
  router.get('/photo/:id', controller.home.index)
  // router.get('/', controller.home.index);
};
