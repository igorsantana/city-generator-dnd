import HashService from "../service/HashService";

interface Service {
  gen(value: any, cb: (data: any) => any): void;
};

function gen(value: any, cb: (data: any) => any): void {
  const { data, identifier } = value;
  let city = genVillage(data);
  HashService.update({ hash: identifier, entity: city })
  cb(city)
}

function genVillage(config): any {
  const entity: any = {};
  entity.city = {}
  entity.city.size = getRandom(config.city.min, config.city.max)
  entity.city.governor = genGovernorStyle()
  entity.races = genRaces(config.races, entity.city.size)
  entity.shops = genShops(config.shops,entity.city.size)
  entity.guilds = genBooleans(config.guilds)
  entity.temples = genBooleans(config.temples)
  return entity;
}

function genGovernorStyle(): string {
  const styles = [
    'Respected, fair and just', 
    'Feared tyrant',
    'Weakling manipulated by others',
    'Illegitimate ruler, simmering civil war',
    'Ruled or controlled by a powerful monster',
    'Mysterious, anonymous cabal',
    'Contested leadership, open fighting',
    'Cabal seized power openly 15 Doltish lout',
    'On deathbed, claimants compete for power',
    'I ron-willed but respected',
    'Religious leader']

    return styles[Math.floor(Math.random() * styles.length)];
}

function genRaces(races: any, populationSize: number): any {
  const racesArr: any[] = Object.entries(races);
  let racesSize: any = { ...races }
  let occurencyWeight: any = {
    nonexistent: 0,
    almostnonexistent: 1,
    few: 4,
    common: 10,
    verycommon: 20,
    predominant: 60
  }

  Object.keys(racesSize).forEach((key: string) => racesSize[key] = 0)

  const weightArr: any[] = racesArr.map((data: any) => {
    return [data[0], occurencyWeight[data[1].value]]
  })

  for (let i:number = 0; i < populationSize; i++) {
    racesSize[choiceWeighted(weightArr)]++;
  }

  return racesSize;
}

function genShops(shopsBool: any, populationSize: number): any{
  const shopsWeights:any = {
    pawnshop: 60,
    smithy: 60,
    herbsincense: 100,
    carpenter: 100,
    fruitsvegetables: 100,
    weaver: 100,
    driedmeats: 100,
    jeweler: 60,
    pottery: 60,
    baker: 60,
    undertaker: 60,
    mapmaker: 30,
    bookstore: 30,
    tailor: 60,
    moneylender: 60,
    ropemaker: 60,
    weaponsarmor: 60,
    mason: 30,
    chandler: 60,
    scribe: 30,
    tavern: 500,
    generalstore: 500,
    magicshop: 10
  }
  let shops:any = { ...shopsWeights }
  Object.keys(shops).forEach((key: string) => shops[key] = 0)
  Object.keys(shopsBool).forEach((key: string) => {
    if(!shopsBool[key].generate)
      shopsWeights[key] = 0
  }) 

  const shopsNumber = getRandom(Math.floor(populationSize/6),Math.floor(populationSize/4))

  for (let i:number = 0; i < shopsNumber; i++) {
    shops[choiceWeighted(Object.entries(shopsWeights))]++;
  }

  return shops;
}

function genBooleans(bools: any): any{
  const values:any = { ...bools};
  Object.keys(bools).forEach((key: string) => {
    values[key] = 0
    if(bools[key].generate)
      values[key] = 1
  })
  return values;
}

function getRandom(min: number, max: number): number {
  return Math.floor(
    Math.random() * (max - min) + min
  )
}

function choiceWeighted(arr: any[]): string {
  let out: string[] = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i][1]; j++) {
      out.push(arr[i][0]);
    }
  }
  return out[Math.floor(Math.random() * out.length)];
}

const service: Service = { gen }
export default service;