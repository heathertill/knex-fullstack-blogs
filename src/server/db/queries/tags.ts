import {connection as knex } from '../index';

const createBlogTag = (blogObject: any) => knex('blogTags').insert(blogObject);
const getTag = (blogid: number) => knex('tags').where('blogTags.blogid', blogid).select('tags.id', 'tags.name').join('blogTags', 'blogTags.tagid', '=', 'tags.id').orderBy('tags.name').limit(1);
const getAllTags = () => knex('tags').select('name', 'id');
const deleteBlogTag = (blogid: number) => knex('blogTags').where('blogid', blogid).del();


export default {
    createBlogTag,
    getTag,
    getAllTags,
    deleteBlogTag
}