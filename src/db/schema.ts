import {
    pgTable,
    serial
} from "drizzle-orm/pg-core";

export const users = pgTable("tw_users", {
    id: serial("id").primaryKey(),
})