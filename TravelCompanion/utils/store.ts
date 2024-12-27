import {create} from 'zustand'
import {createAvatar} from "@dicebear/core";
import {lorelei, openPeeps} from "@dicebear/collection";

type Store = {
    svg: string,
    setSvg: (svg: string) => void,
    username: string,
    setUsername: (username: string) => void,
    age:string,
    setAge: (age: string) => void,
    gender: string,
    setGender: (gender: string) => void,
}

const avatar = createAvatar(lorelei, {
    seed: 'Farmaan_Malik ',
    backgroundColor:['8EB8E5','9184EE'],
    backgroundType:['gradientLinear'],
    backgroundRotation: [0,180],
    freckles: ["variant01"],
    frecklesProbability:50,
    glasses: ["variant01","variant02","variant03","variant04","variant05"],
    glassesProbability: 20,
    hairAccessories: ["flowers"],
    hairAccessoriesProbability:30,
    hairAccessoriesColor:['0f0f0f']
})

export const useStore = create<Store>((setState, getState) => ({
        age:'23',
        svg: avatar.toString(),
        username: 'Farmaan Malik',
        gender:'male',
        setSvg: (svg: string) => {
            setState(state => ({
                ...state, svg : svg
            }))
        },
        setUsername: (username: string) => {
            setState(state => ({...state, username : username}))
        },
        setAge: (age: string) => {
            setState(state => ({...state, age : age}))
        },
    setGender:(gender:string)=>(
        setState(state=>({...state,gender:gender}))
    )
    })
)