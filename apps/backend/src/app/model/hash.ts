import * as mongoose from "mongoose"

let Hash = {
  hash: {
    type: String,
    required: true,
    index:true
  },
  entity: {
    type: mongoose.Schema.Types.Mixed,
    required: true
  }
};
let HashSchema = mongoose.Schema(Hash);

export default mongoose.model('Hash', HashSchema);