"use client";

import { useEffect } from "react"


const BootstrapClient = () => {
    useEffect(() => {
        import('bootstrap/dist/js/bootstrap.min.js');
    }, []);
  
  return null
}

export default BootstrapClient