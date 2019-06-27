import { Router } from 'express';
import queries from '../db';

const router = Router();


router.get('/:id?', async (req, res) => {
    let id = req.params.id
    if (id) {
        try {
            let blog = await queries.Blogs.one(id);
            res.json(blog[0]);
        } catch (err) {
            console.log(err);
            res.sendStatus(500);
        }
    } else {
        try {
            res.json(await queries.Blogs.all());
        } catch (err) {
            console.log(err);
            res.sendStatus(500);
        }
    }
});

router.post('/', async (req, res) => {
    try {
        let newBlog = await queries.Blogs.createBlog(req.body);
        res.json(newBlog);
        
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

router.put('/:id', async (req, res) => {
    let id = req.params.id;
    try {
        res.json(await queries.Blogs.updateBlog(req.body, id))
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

router.delete('/:id', async (req, res) => {
    let id = req.params.id
    try {
        res.json(await queries.Blogs.deleteBlog(id))
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});



export default router;

