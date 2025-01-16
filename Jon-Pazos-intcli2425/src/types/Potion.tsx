import { crafting } from "./Crafting"
import { effect } from "./Effect"
import { ingredients } from "./Ingredients"
import { meta } from "./Meta"
import { SecondaryEffect } from "./SecondaryEffect"
import { usage } from "./Usage"
export type Potion = {
    
    id: String,
    name: String,
    type: String,
    rarity: String,
    effects: {
      primary: effect,
      secondary:SecondaryEffect[],
    }
    ingredients: ingredients[],
    crafting: crafting,
    usage: usage,
    meta: meta,
    image: String,
  }
