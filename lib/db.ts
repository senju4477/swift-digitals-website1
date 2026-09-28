import {env} from 'cloudflare:workers';
export function getDb(){const db=(env as unknown as {DB?:D1Database}).DB;if(!db)throw new Error('Enquiry storage is unavailable');return db;}
