import Service from "../service/GeneratorService";

function stepOne(req:any,res:any){
  Service.gen(req.body, (data:any) => {
    // if(err) res.status(404).send(err);
    res.json(data);
  })
}

const Controller = {
    stepOne
};


export default Controller;