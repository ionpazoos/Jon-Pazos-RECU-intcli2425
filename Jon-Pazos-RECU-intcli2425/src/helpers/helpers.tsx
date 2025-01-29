import { MegaEpicFortress,villager } from "../types/MegaEpicFortress";

type Tower = {
  name: string,
  guards: string[]
}
export const getTowerAndWardsByWeaponType = (fortress: MegaEpicFortress, weapon: string): Tower[] => {
  let filteredTowers: Tower[] = [];
  let guardsNames: string[] = [];

  fortress.defenses.towers.forEach(tower => {
    if (!filteredTowers.some(t => t.name == tower.name) && tower.armament.weaponType == weapon) {

      tower.guards.forEach(guard => {
        guardsNames.push(guard.name);
      });
      let newTower: Tower = {
        name: tower.name,
        guards: guardsNames
      };
      filteredTowers.push(newTower)
    }
  });
  return filteredTowers;
};


export const countVillagersByProfession = (fortress: MegaEpicFortress): Record<string, number> => {
  let professions: Record<string, number> = {}
  const roles = fortress.inhabitants.roles;
  for (let i = 0; i < roles.length; i++) {
    if (roles[i].role == "Villager") {
      const  villagers: villager = roles[i] as villager;
      villagers.professions.forEach(profession => {
        professions[profession.type] = profession.count;
      });
    }
  }
  return professions;
}
