import { calculateaverageCraftingCost, calculateCraftingTime, filterByLevel, findPotionByEffect, getPotionsByRarity, listIngridients } from '../helpers/potionHelper';
import { potions } from '../data/data';


describe('filter potions by level', () => {
    test('returns potions array with less lv than 5', () => {
        const filteredPotions = filterByLevel(potions, 5);
        for (let i = 0; i < filteredPotions.length; i++) {
            expect(filteredPotions[i].crafting.required_level).toBeLessThanOrEqual(5);
        }
    });
});

describe('filter potions by rarity', () => {
    test('returns potions array with especific rarity', () => {
        const filteredPotions = getPotionsByRarity(potions, "legendary");
        for (let i = 0; i < filteredPotions.length; i++) {
            expect(filteredPotions[i].rarity).toBe("legendary");
        }
    });
});

describe('listingredeints', () => {
    test('retunrs ingredients nedeed for that potion', () => {
        const ingredients = listIngridients(potions[0]);
        for (let i = 0; i < ingredients.length; i++) {
            console.log(potions[0].ingredients);

            expect(ingredients[i]).toBe(potions[0].ingredients[i].name)
        }

    });
});

describe('filter potions by secondary effect', () => {
    test('returns potions array with especific effect', () => {
        const filteredPotions = findPotionByEffect(potions, "healthRegeneration");
        for (let i = 0; i < filteredPotions.length; i++) {
            let hasEffect = false;
            for (let z = 0; z < filteredPotions[i].effects.secondary.length; z++) {
                if (filteredPotions[i].effects.secondary[z].attribute === "healthRegeneration") {
                    hasEffect = true;
                }

            }
            expect(hasEffect).toBe(true);
        }
    });
});

describe('calculateCraftingTime', () => {
    test('Return toal crafting time', () => {
        const PotionsToCalcule = [potions[0], potions[1]];
        const TotalTime = calculateCraftingTime(PotionsToCalcule);
        expect(TotalTime).toBe(105)

    });
});


describe('calculate average time of a potion list', () => {
    test('Return average crafting time', () => {
        const PotionsToCalcule = [potions[0], potions[1]];
        const TotalTime = calculateaverageCraftingCost(PotionsToCalcule);
        expect(TotalTime).toBe(52.5)
    });
});

describe('filter potions by ingredients', () => {
    test('returns potions array with especific ingredient needed to craft', () => {
        const filteredPotions = findPotionByEffect(potions, "Frostbloom Petals");
        for (let i = 0; i < filteredPotions.length; i++) {
            let hasIngredient = false;
            for (let z = 0; z < filteredPotions[i].ingredients.length; z++) {
                if (filteredPotions[i].ingredients[z].name === "Frostbloom Petals") {
                    hasIngredient = true;
                }

            }
            expect(hasIngredient).toBe(true);
        }
    });
});
