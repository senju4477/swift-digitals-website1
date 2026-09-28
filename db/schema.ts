import {sql} from 'drizzle-orm';
import {sqliteTable,text,index} from 'drizzle-orm/sqlite-core';
export const enquiries=sqliteTable('enquiries',{id:text('id').primaryKey(),name:text('name').notNull(),email:text('email').notNull(),phone:text('phone').notNull().default(''),website:text('website').notNull().default(''),service:text('service').notNull(),message:text('message').notNull(),createdAt:text('created_at').notNull().default(sql`CURRENT_TIMESTAMP`)},t=>[index('idx_enquiries_email_created').on(t.email,t.createdAt)]);
