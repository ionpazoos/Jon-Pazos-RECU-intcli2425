import { Potion } from "../types/Potion";

export const filterByLevel = (potions: Potion[], lv: Number) => {
  let filteredePotions: Potion[] = [];
  for (let i = 0; i < potions.length; i++) {
    if (potions[i].crafting.required_level <= lv) {
      filteredePotions.push(potions[i])
    }
  }
  return filteredePotions;
};

export const getPotionsByRarity = (potions: Potion[], rarity: String) => {
  let filteredePotions: Potion[] = [];
  for (let i = 0; i < potions.length; i++) {
    if (potions[i].rarity === rarity) {
      filteredePotions.push(potions[i])
    }
  }
  return filteredePotions;
};

export const listIngridients = (potion: Potion) => {
  let ingredeintList: String[] = [];
  for (let i = 0; i < potion.ingredients.length; i++) {
    ingredeintList.push(potion.ingredients[i].name)
  }

  return ingredeintList;
};

export const findPotionByEffect = (potions: Potion[], effect: String) => {
  let filteredPotions: Potion[] = [];
  for (let i = 0; i < potions.length; i++) {
    for (let z = 0; z < potions[i].effects.secondary.length; z++) {
      if (potions[i].effects.secondary[z].attribute === effect) {
        filteredPotions.push(potions[i])
      }
    }
  }
  return filteredPotions;
};

export const calculateCraftingTime = (potions: Potion[]) => {
  let totalMinutes = 0;
  for (let i = 0; i < potions.length; i++) {
    switch (potions[i].crafting.time.unit) {
      case "hours":
        totalMinutes += (potions[i].crafting.time.amount * 60);
        break;
      case "minutes":
        totalMinutes += potions[i].crafting.time.amount;
        break;
      default:
        break;
    }
  }
  return totalMinutes;
};

export const calculateaverageCraftingCost = (potions:Potion[]) => {
  let totalMinutes = 0;
  for (let i = 0; i < potions.length; i++) {
    switch (potions[i].crafting.time.unit) {
      case "hours":
        totalMinutes += (potions[i].crafting.time.amount * 60);
        break;
      case "minutes":
        totalMinutes += potions[i].crafting.time.amount;
        break;
      default:
        break;
    }
  }
  const averageTime = totalMinutes / potions.length;
  return averageTime;
}

export const findPotionByIngredient = (potions: Potion[], ingredient: String) => {
  let filteredPotions: Potion[] = [];
  for (let i = 0; i < potions.length; i++) {
    for (let z = 0; z < potions[i].ingredients.length; z++) {
      if (potions[i].ingredients[z].name === ingredient) {
        filteredPotions.push(potions[i])
      }
    }
  }
  return filteredPotions;
};