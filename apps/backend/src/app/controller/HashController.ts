import Service from "../service/HashService";

function getHash(req,res){
  Service.getHash(req.params.hash, (err, data) => {
    if(err) res.status(404).send(err);
    res.json(data);
  })
}

function updateHash(req,res){
  Service.update(req.body, (err,data) => {
    if(err) res.status(404).send(err);
    res.json(data);
  });
}

function saveHash(req,res){
  Service.save(req.body, (err,data) => {
    if(err) res.status(422).send(err.errors.type.properties.message);
    res.json(data);
  });
}

function deleteHash(req,res){
  Service.remove(req.params.hash, (err, data) => {
      if(err) res.status(500).send(err);
      res.json(data);
  });
}

const HashController = {
    getHash,
    updateHash,
    saveHash,
    deleteHash
};


export default HashController;