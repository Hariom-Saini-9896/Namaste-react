import { useState, useEffect } from 'react'

const useOnline = () => {
  const [onlineStatus, setOnlineStatus] = useState(true)

  useEffect( () => {
    const handleOnline = () => setOnlineStatus(true)
    const handleOffline = () => setOnlineStatus(false)

    window.addEventListener("online", handleOnline)
    window.addEventListener("offline", handleOffline)

    // Before returning clear all listners
    return () => {
      window.removeEventListener("online", handleOnline)
      window.removeEventListener("offline", handleOffline)
    }
    
  }, [] )



  return onlineStatus;
}

export default  useOnline;

// Senior Developer thing :
// Always remove your addEventListners.