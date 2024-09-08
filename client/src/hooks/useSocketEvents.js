import { useEffect } from "react";
import { NEW_MESSAGE } from "../constants/events";

export const useSocketEvents = (socket, handlers) => {
    useEffect(() => {
        Object.entries(handlers).forEach(([event,handler] )=>{
            socket.on(event , handler);
        })
    
        //socket.on(NEW_MESSAGE,newMessagesHandler);
    
        return () => {
            Object.entries(handlers).forEach(([event,handler] )=>{
                socket.off(event, handler);
            });
          socket.off(NEW_MESSAGE,)
        }
      },[socket , handlers])
}
