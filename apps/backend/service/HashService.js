import Hash from "../model/hash.js";

function Service(){
};

Service.prototype.save = function(value, cb){
  let newHash = new Hash(value);
  Hash.create(newHash, cb)
}

Service.prototype.getHash = function(hash,cb){
  Hash.findOne({"hash":hash}, cb);
}

Service.prototype.remove = function(hash,cb){
  Hash
    .findOne({"hash":hash})
    .remove(cb);
}

Service.prototype.update = function(obj, cb){
  Hash.findOneAndUpdate({"hash":obj.hash}, obj, {
    new: true
  },cb)
}

export default new Service();