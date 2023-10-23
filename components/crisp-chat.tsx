"use client"

import { useEffect } from "react"
import {Crisp} from "crisp-sdk-web"


export const CrispChat = () => {
    useEffect(()=> {
        Crisp.configure("bd03a7b8-fa56-443c-b80c-f101aaf79dcc")
    },[])
    return null;
}