import * as JWT from "jsonwebtoken";

interface TokenPair {
    accessToken: string;
    refreshToken: string;
}

export const createTokenPair =
    /**
     * function return a object {accessToken, refreshToken}
     * @param payload 
     * @param publicKey 
     * @param privateKey 
     * @returns 
     */
    async (
        payload: object,
        publicKey: string,
        privateKey: string
    ): Promise<{ accessToken: string; refreshToken: string }> => {
        const accessToken = JWT.sign(payload, privateKey, {
            expiresIn: "2 days",
            algorithm: "RS256",
        });
        const refreshToken = JWT.sign(payload, privateKey, {
            expiresIn: "7 days",
            algorithm: "RS256",
        });

        // JWT.verify(accessToken, publicKey, (err, decode) => {
        //     if(err) {
        //         console.log("decode is errr")
        //     }

        //     console.log(`decode access token:::${decode}`)
        //     console.log(decode)
        // })
        return { accessToken, refreshToken };
    };
