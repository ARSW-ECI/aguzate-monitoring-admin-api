/** source/routes/posts.ts */
import express from 'express';
import controller from '../controllers/posts';
const postsRouter = express.Router();

postsRouter.get('/posts', controller.getPosts);
postsRouter.get('/posts/:id', controller.getPost);
postsRouter.put('/posts/:id', controller.updatePost);
postsRouter.delete('/posts/:id', controller.deletePost);
postsRouter.post('/posts', controller.addPost);

export = postsRouter;