import HashService from "../service/HashService";

interface Service {
  gen(value:any,cb: (data: any) => any ):void;
};

function gen(value:any,cb:(data: any) => any ):void{
  const { config, hash }= value;
  // const config = value.config;
  // const hash = value.hash;

  let city = genVillage(config);
  HashService.update({hash:hash, entity:city})
  cb(city)
}


// function genCity(config){
//   switch(config.cityType){
//     case "VILLAGE":
//       return genVillage(config);
  
// }

function genVillage(config):any{
  let entity:any = {};
  entity.population = {}
  entity.population.size = getRandom(config.population.min,config.population.max)
  entity.population.races = genPeoples(config.population.races,entity.population.size)
  return entity;
}

function getRandom(min:number, max:number):number{
  return Math.floor(
    Math.random() * (max - min) + min
  )
}

function genPeoples(races:any, populationSize:number):any{
  const racesArr:any[] = Object.entries(races);
  let racesSize:any = { ...races }
  let occurencyWeight:any = {
    nonexistent:0,
    almostnonexistent:1,
    few:4,
    common:10,
    verycommon:20,
    predominant:60
  }
  
  Object.keys(racesSize).forEach((key:string)=>racesSize[key]=0)

  const weightArr:any[] = racesArr.map((data:any)=>{
    return [data[0],occurencyWeight[data[1]]]
  })

  for(let i = 0;i<populationSize;i++){
    racesSize[choiceWeighted(weightArr)]++;
  }

  return racesSize;
}

function choiceWeighted(arr:any[]):string{
  let out:string[] = [];
  for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i][1]; j++) {
          out.push(arr[i][0]);
      }
  }
  return out[Math.floor(Math.random() * out.length)];
}

const service:Service = { gen }
export default service;