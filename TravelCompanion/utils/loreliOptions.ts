import {lorelei} from "@dicebear/collection";
import { Options } from "@dicebear/core";

export const loreliOptions: Partial<lorelei.Options & Options> | undefined = {
    backgroundColor: ['8EB8E5', '9184EE'],
    backgroundType: ['gradientLinear'],
    backgroundRotation: [0, 180],
    freckles: ["variant01"],
    frecklesProbability: 50,
    glasses: ["variant01", "variant02", "variant03", "variant04", "variant05"],
    glassesProbability: 20,
    hairAccessories: ["flowers"],
    hairAccessoriesProbability: 30,
    hairAccessoriesColor: ['0f0f0f']
}