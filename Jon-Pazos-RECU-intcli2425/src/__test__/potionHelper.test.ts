import { countVillagersByProfession, getTowerAndWardsByWeaponType } from '../helpers/helpers';
import { MegaEpicFortress } from '../types/MegaEpicFortress';


describe("getTowerAndWardsByWeaponType", () => {
    it("should return towers with the specified weapon type and their guards", () => {
        const mockFortress: MegaEpicFortress = {
            name: "Test Fortress",
            location: {
                continent: "Test Continent",
                coordinates: { latitude: 0, longitude: 0 },
                nearbyLandmarks: []
            },
            defenses: {
                walls: { material: "Stone", height: 10, enchantments: [] },
                towers: [
                    {
                        name: "Tower of the best",
                        guards: [
                            { name: "pazos", rank: "Boss" },
                            { name: "lander", rank: "cleaner" }
                        ],
                        armament: { weaponType: "Cannon", ammunitionType: "Shells", ammunitionCount: 100 },
                        height: 100
                    }
                ]
            },
            inhabitants: {
                population: 100,
                roles: []
            },
            resources: {
                storage: {
                    food: { type: "Grain", quantity: 1000, unit: "kg" },
                    water: { source: "Well", capacity: 5000, unit: "liters" }
                },
                armory: { weapons: [], shields: [] }
            },
            history: {
                founded: { year: 1000, by: "Test King" },
                majorEvents: []
            }
        };

        expect(getTowerAndWardsByWeaponType(mockFortress, "Cannon")).toEqual([
            {
                name: "Tower of the best",
                guards: ["pazos", "lander"]
            }
        ]);
    });
});

describe("countVillagersByProfession", () => {
    it("should correctly count professions of villagers", () => {
        const mockFortress: MegaEpicFortress = {
            name: "Test Fortress",
            location: {
                continent: "Test Continent",
                coordinates: { latitude: 0, longitude: 0 },
                nearbyLandmarks: []
            },
            defenses: {
                walls: { material: "Stone", height: 10, enchantments: [] },
                towers: []
            },
            inhabitants: {
                population: 100,
                roles: [
                    {
                        role: "Villager",
                        count: 50,
                        professions: [
                            { type: "Farmer", count: 10 },
                            { type: "Blacksmith", count: 5 }
                        ]
                    }
                ]
            },
            resources: {
                storage: {
                    food: { type: "Grain", quantity: 1000, unit: "kg" },
                    water: { source: "Well", capacity: 5000, unit: "liters" }
                },
                armory: { weapons: [], shields: [] }
            },
            history: {
                founded: { year: 1000, by: "Test King" },
                majorEvents: []
            }
        };

        expect(countVillagersByProfession(mockFortress)).toEqual({ Farmer: 10, Blacksmith: 5 });
    });
});



