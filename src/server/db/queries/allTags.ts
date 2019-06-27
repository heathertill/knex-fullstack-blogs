import {connection as knex } from '../index';

const allOneTag = (id: number) => knex('blogs').where('blogTags.tagid', id).select().join('blogTags', 'blogs.id', '=', 'blogtags.blogid')

// export const allOneTag = async (id: number) => {
//     // let query = 'SELECT * FROM blogs b JOIN blogTags bt ON b.id = bt.blogid WHERE bt.tagid = ?';
//     let query = 'CALL spAllOneTag(?)';
//     return new Promise((resolve, reject) => {
//         Connection.query(query, [id], (err: any, results: any) => {
//             if (err) {
//             return reject(err)
//         } resolve(results)
//         })
//     })
    
// }

export default {
allOneTag
}