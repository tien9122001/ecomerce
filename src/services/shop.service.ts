import shopModel from "../models/shop.model";

interface ShopSelect {
    email: string;
    select: {
        email: number;
        password: number;
        name: number;
        status: number;
        roles: number;
    };
}

export const findByEmail = async (
    email: string,
    select: {
        email: number;
        password: number;
        name: number;
        status: number;
        roles: number;
    } = {
        email: 1,
        password: 2,
        name: 1,
        status: 1,
        roles: 1,
    }
) => {
    return await shopModel.findOne({ email }).select(select).lean();
};
