import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("user").del();

  // Inserts seed entries
  await knex("user").insert([
    {
      user_id: "1",
      first_name: "ryo",
      last_name: "suzuki",
      email: "example@gmail.com",
      password: "passwordtext",
    },
  ]);
}
