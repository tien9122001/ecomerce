import keytokenModel from "../models/keytoken.model";
import mongoose, { Types, mongo } from "mongoose";
import crypto from "crypto";

interface Params {
    userId: Types.ObjectId;
    publicKey: string;
    privateKey: string;
    refreshToken: string;
}

class KeyTokenService {
    /**
     *
     * @param param0
     * @returns
     */
    static createKeyToken = async ({
        userId,
        publicKey,
        privateKey,
        refreshToken,
    }: Params) => {
        // let {userId, publicKey, privateKey, refreshToken} = params
        try {
            // const publicKeyString = publicKey.toString();
            // const tokens = await keytokenModel.create({
            //     user : userId,
            //     publicKey : publicKey
            // })

            // console.log(`Public key string ::: ${publicKey.toString()}`)

            // return tokens ? publicKey : null;

            const filter: mongoose.FilterQuery<{}> = { user: userId };
            const update: mongoose.UpdateQuery<{}> = {
                publicKey,
                privateKey,
                refreshTokensUsed: [],
                refreshToken,
            };
            const options: mongoose.QueryOptions = { upsert: true, new: true };
            const tokens = await keytokenModel.findOneAndUpdate(
                filter,
                update,
                options
            );

            return tokens ? tokens.publicKey : null;
        } catch (error) {
            return error;
        }
    };
}

export default KeyTokenService;
