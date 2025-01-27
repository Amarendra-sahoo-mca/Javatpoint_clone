import { createContext, useContext } from "react";

export const TuggleContext = createContext({
    themMode : 'daymode',
    darkMode : ()=>{},
    lightMode : ()=>{},
})
export const useTuggle =()=>{
    return useContext(TuggleContext);
}
export const TuggleProvider = TuggleContext.Provider;