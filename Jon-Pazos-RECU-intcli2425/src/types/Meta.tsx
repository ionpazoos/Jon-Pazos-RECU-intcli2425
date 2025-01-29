export type meta = {
    created_by: String,
    lore: String,
    availability: {
      in_shops: Boolean,
      quest_reward: Boolean,
      drop_rate: {
        boss: String,
        chance: String,
      },
    },
  }