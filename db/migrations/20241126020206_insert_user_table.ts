import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex("user").insert({ first_name: "ryo", last_name: "suzuki", email: "sample@email.com", password: "sample" });
}

export async function down(knex: Knex): Promise<void> {
  await knex("user").delete().where("*");
}
