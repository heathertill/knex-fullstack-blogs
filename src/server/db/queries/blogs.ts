import {connection as knex } from '../index';



const all = () => knex('blogs').select('blogs.id', 'authors.name', 'blogs.title', 'blogs.content', 'blogs._created').join('authors', 'blogs.authorid', '=', 'authors.id').orderBy('_created', 'desc');
const one = (id: number) => knex('blogs').select('blogs.id', 'authors.name', 'blogs.title', 'blogs.content', 'blogs._created').join('authors', 'blogs.authorid', '=', 'authors.id').where('blogs.id', id);
const createBlog = (blogObject: any) => knex('blogs').insert(blogObject);
const updateBlog = (blogObject: any, id: number) => knex('blogs').where('id', '=', id).update(blogObject);
const deleteBlog = (id: number) => knex('blogs').where('id', id).del();




// export const createBlog = async (title: string, content: string, authorid: number) => {
//     let query = 'INSERT INTO blogs (title, content, authorid) VALUES (?, ?, ?)';
//     return new Promise((resolve, reject) => {
//         Connection.query(query, [title, content, authorid], (err: any, results: any) => {
//             if (err) {
//                 return reject(err);
//             } resolve(results);
//         })
//     })
// }

// export const updateBlog = async (title: string, content: string, id: number) => {
//     let query = 'UPDATE blogs SET title = ?, content = ? WHERE id = ?';
//     return new Promise((resolve, reject) => {
//         Connection.query(query, [title, content, id], (err: any, results: any) => {
//             if (err) {
//                 return reject(err);
//             } resolve(results)
//         })
//     })
// }

// export const deleteBlog = async (id: number) => {
//     let query = 'DELETE FROM blogs WHERE id = ?';
//     return new Promise((resolve, reject) => {
//         Connection.query(query, [id], (err: any, results: any) => {
//             if (err) {
//                 return reject(err);
//             } resolve(results)
//         })
//     })
// }

export default {
    all,
    one,
    createBlog,
    updateBlog,
    deleteBlog
}