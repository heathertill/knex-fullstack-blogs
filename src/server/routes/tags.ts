import { Router } from 'express';
import queries from '../db'

const router = Router();

router.get('/', async (req, res) => {
    try {
        res.json(await queries.Tags.getAllTags())
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

router.get('/:blogid', async (req, res) => {
    let blogid = req.params.blogid
    try {
        let tag = await queries.Tags.getTag(blogid);
        // res.json(((await db.Tags.getTag(blogid))[0])[0])
        res.json(tag[0])
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

router.post('/', async (req, res) => {
    try {
        res.json(await queries.Tags.createBlogTag(req.body))
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

router.delete('/:blogid', async (req, res) => {
    let blogid = req.params.blogid
    try {
        res.json(await queries.Tags.deleteBlogTag(blogid))
    } catch (err) {
        console.log(err)
    }
})

export default router;