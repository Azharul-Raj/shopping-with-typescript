import React, { createContext } from 'react';
import { Style } from '../pages/Style';

type StyleProviderProps = {
    children:React.ReactNode
}
export const StyleContext=createContext(Style)
const StyleProvider = ({children}:StyleProviderProps) => {
    return (
        <StyleContext.Provider value={Style}>
            {
                children
            }
        </StyleContext.Provider>
    );
};

export default StyleProvider;