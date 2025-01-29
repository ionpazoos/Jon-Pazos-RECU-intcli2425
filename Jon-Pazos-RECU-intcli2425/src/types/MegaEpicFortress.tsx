export type MegaEpicFortress = {
  name: String,
  location: location,
  defenses: defenses,
  inhabitants: inhabitants,
  resources: resources,
  history: history,
}

type location = {
  continent: string,
  coordinates: {
    latitude: number,
    longitude: number,
  }
  nearbyLandmarks: landmark[],
}
type landmark = {
  name: string,
  type: string,
  distance: number
}
type defenses = {
  walls: walls,
  towers: tower[],

}
type walls = {
  material: string,
  height: number,
  enchantments: enchantment[],
}
type enchantment = {
  name: string,
  level: number
}
type tower = {
  name: string,
  height: number,
  armament: armament,
  guards: guard[],
}
type armament = {
  weaponType: string,
  ammunitionType: string,
  ammunitionCount: number,
}
type guard = {
  name: string,
  rank: string,
}
type inhabitants = {
  population: number,
  roles: role[],
}
type role = soldier | mage | villager;

type soldier = {
  role: string,
  count: number,
  equipment: {
    weapon: string,
    armor: string,
    shield: string
  }

}
type mage = {
  role: string,
  count: number,
  equipment: {
    staff: string,
    robe: string,
    amulet: string
  }
}
export type villager = {
  role: string,
  count: number,
  professions: profession[]
}
type profession = {
  type: string,
  count: number
}
type resources = {
  storage: storage,
  armory: armory,
}

type storage = {
  food: food,
  water: water
}
type food = {
  type: string,
  quantity: number,
  unit: string,
}
type water = {
  source: string,
  capacity: number,
  unit: string,
}
type armory = {
  weapons: weapon[],
  shields: shield[]
}
type weapon = {
  type: string,
  quantity: number
}
type shield = {
  type: string,
  quantity: number
}
type history = {
  founded: {
    year: number,
    by: string,
  }
  majorEvents: event[],
}
type event = {
  year: number,
  event: string,
  outcome: string,
}