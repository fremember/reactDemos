import React, { useState } from 'react'

interface AppStateValue {
    username: string;
    shoppingCart: {
        items: { id: number, name: string }[]
    }
}

const defaultContextValue: AppStateValue = {
  username: 'fremember',
  shoppingCart: {
    items: []
  }
}
export const appContext = React.createContext(defaultContextValue);
export const appSetStateContext = React.createContext<React.Dispatch<React.SetStateAction<AppStateValue>> | undefined>(undefined)

export const AppStateProvider = ({ children }) => {
    const [state, setState] = useState(defaultContextValue)
    return (
        // 传递状态
        <appContext.Provider value={ state }>
            {/* 传递状态操作方法 */}
            <appSetStateContext.Provider value={ setState }>
                { children }
            </appSetStateContext.Provider>
        </appContext.Provider>
    )
}
