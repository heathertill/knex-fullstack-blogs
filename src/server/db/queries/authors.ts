import {connection as knex } from '../index';

const getAuthId = (name: string) => knex('blogs').where('authors.name', name).select('authorid').join('authors', 'blogs.authorid', '=', 'authors.id').orderBy('authorid').limit(1);


export default {
    getAuthId
}


