import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("favorites", (table) => {
    table.increments("id").primary();
    // いいねを押したuserのid
    table.integer("favoUserId").notNullable();
    // いいねをつけたdrinkのid
    table.string("favoIdDrink").notNullable();

    // あるユーザーがあるドリンクにいいねをつけられるのは一回まで
    table.unique(["favoUserId", "favoIdDrink"]);

    table.foreign("favoUserId").references("user_id").inTable("user");
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("favorites");
}
