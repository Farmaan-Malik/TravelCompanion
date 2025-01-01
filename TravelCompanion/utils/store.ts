import {create} from 'zustand'
import {createAvatar} from "@dicebear/core";
import {lorelei} from "@dicebear/collection";
import {loreliOptions} from "@/utils/loreliOptions";

type Store = {
    fullname: string,
    setFullname:(fullname:string) => void,
    svg: string,
    setSvg: (svg: string) => void,
    username: string,
    setUsername: (username: string) => void,
    age: string,
    setAge: (age: string) => void,
    gender: string,
    setGender: (gender: string) => void,
}

const avatar = createAvatar(lorelei, {
    seed: 'BrownShroom',
   ...loreliOptions
})

export const useStore = create<Store>((setState) => ({
        fullname: 'Farmaan Malik',
        age: '23',
        svg: avatar.toString(),
        username: 'BrownShroom',
        gender: 'Male',
        setSvg: (svg: string) => {
            setState(state => ({
                ...state, svg: svg
            }))
        },
        setUsername: (username: string) => {
            setState(state => ({...state, username: username}))
        },
        setAge: (age: string) => {
            setState(state => ({...state, age: age}))
        },
        setGender: (gender: string) => (
            setState(state => ({...state, gender: gender}))
        ),
    setFullname:(fullname:string)=>(
        setState(state=>({...state,fullname: fullname}))
    )
    })
)