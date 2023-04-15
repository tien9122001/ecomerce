import { Schema, model } from "mongoose";

const DOCUMENT_NAME = "ApiKey"
const COLLECTION_NAME = "ApiKeys"


const apiKeySchema = new Schema({
    key : {
        type : String, 
        required : true,
        unique : true
    },
    status : {
        type : Boolean,
        default : true
    }, 
    permission : {
        type : [String],
        required : true,
        enum : ["0000", "1111", "2222"]
    }
}, {
    collection : COLLECTION_NAME,
    timestamps : true
});


export default model(DOCUMENT_NAME, apiKeySchema);