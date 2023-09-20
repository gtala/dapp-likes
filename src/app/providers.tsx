'use client'

import * as React from 'react'
import { WagmiConfig } from 'wagmi'

import { config } from '../wagmi'

import { CssBaseline } from '@mui/material';
import '../styles/globals.css';


export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])


  return <>
    <CssBaseline />
    <WagmiConfig config={config}>{mounted && children}</WagmiConfig>
  </>
}