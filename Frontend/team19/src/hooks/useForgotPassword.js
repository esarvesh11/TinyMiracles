import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import { useNavigate } from 'react-router-dom'

export const useForgotPassword=()=>
{
    const navigate = useNavigate();
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const forgotPassword= async (aadhar)=>
    {
        const response = await fetch(' https://miracleachievers.shreeraj.me/backend/api/user/forgotPassword', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({aadhar})
          })

          const json = await response.json()
          console.log("inside useforgotpass",response);
          if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
            {alert(json.error)}
          }
          if (response.ok) {
            console.log("Success")
            {alert("Reset link has been sent to the Email")}
            setIsLoading(false)
          }


    }

    return {forgotPassword,error,isLoading}
}