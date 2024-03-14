"use client"

import { Magic } from "magic-sdk"
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react"
const { Web3 } = require("web3")

type MagicContextType = {
  magic: Magic | null
  web3: typeof Web3 | null
}

const MagicContext = createContext<MagicContextType>({
  magic: null,
  web3: null,
})

export const useMagic = () => useContext(MagicContext)

const MagicProvider = ({ children }: { children: ReactNode }) => {
  const [magic, setMagic] = useState<Magic | null>(null)
  const [web3, setWeb3] = useState<typeof Web3 | null>(null)

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_MAGIC_API_KEY) {
      const magic = new Magic(process.env.NEXT_PUBLIC_MAGIC_API_KEY || "", {
        network: {
          rpcUrl: "https://rpc-mainnet.maticvigil.com",
          chainId: 1101,
        },
      })

      setMagic(magic)
      setWeb3(new Web3((magic as any).rpcProvider))
    }
  }, [])

  const value = useMemo(() => {
    return {
      magic,
      web3,
    }
  }, [magic, web3])

  return <MagicContext.Provider value={value}>{children}</MagicContext.Provider>
}

export default MagicProvider

