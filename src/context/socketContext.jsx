import React,{createContext, useContext, useMemo} from 'react'
import {io} from "socket.io-client"

const socketContext = createContext();


export const useSocket = () => useContext(socketContext);

export const SocketProvider = ({children}) => {
    const socket = useMemo(() => io(process.env.REACT_APP_SOCKET_API_BASE_URL, { withCredentials: true }), []);
    
    socket.on("connect", () => {
        console.log("connected", socket.id);
    });

    return <socketContext.Provider value={socket}>{children}</socketContext.Provider>
}
