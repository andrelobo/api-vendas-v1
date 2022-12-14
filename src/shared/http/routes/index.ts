import productsRouter from '@modules/products/routes/products.routes';
import { Router } from 'express';
import usersRouter from '@modules/users/routes/users.routes';

const routes = Router();

routes.use('/products', productsRouter);

routes.use('/users', usersRouter);

routes.get('/', (req, res) => {
  return res.json({ message: 'Hello Dev !' });

});

export default routes;
