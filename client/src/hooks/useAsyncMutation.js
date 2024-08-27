import { useState } from 'react'
import toast from 'react-hot-toast';

const useAsyncMutation = async (mutation) => {
    const [isLoading , setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null)

    const [mutate] = mutation();

    const executeMutation = async (message, ...args) => {
        setIsLoading(true);
        setError(null);
        setData(null);

        const toastId = toast.loading(message || "just wait...");
        try{
            const res = await mutate(...args);
            if(res.data){
                toast.success(res.data.message || "Success",{
                    id: toastId
                })
            }else{
                toast.error(res.error?.data?.message || "An error occurred",{
                    id: toastId
                })

                setError(res.error);
            }
            
        }catch(e){
            console.log(e);
        }finally{
            setIsLoading(false);
        }
    }

    return [executeMutation , isLoading , data]

   
}

export default useAsyncMutation