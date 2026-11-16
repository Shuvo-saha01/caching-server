import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the API',
    endpoints: {
      health: '/health',
      api: '/api'
    }
  });
});

export default router;
