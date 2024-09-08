import { createContext, useContext, useMemo } from 'react';
import io from 'socket.io-client';




const socketContext = createContext();

export const getSocket = () => useContext(socketContext);

export const SocketProvider = ({children}) => {
    const socket = useMemo(()=>{
        return io('http://localhost:3001',{
            withCredentials:true
        }); // replace with your server URL
        // return io('https://your-server-url.com'); // replace with your server URL
    },[])
    return (
        <socketContext.Provider value={socket}>
            {children}
        </socketContext.Provider>
    )
}

