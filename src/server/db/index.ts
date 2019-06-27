import config from '../config';
import * as knex from 'knex';

import Blogs from './queries/blogs';
import Tags from './queries/tags';
import Authors from './queries/authors';
import AllTags from './queries/allTags';

export const connection = knex(config.knex);

export default {
    Blogs,
    Tags,
    Authors,
    AllTags
}