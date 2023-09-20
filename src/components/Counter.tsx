'use client'
import {useEffect, useState} from 'react';
import {
    usePrepareWagmiMintExampleStore, useWagmiMintExampleRetrieveDate, useWagmiMintExampleRetrieveLikes,
    useWagmiMintExampleStore
} from "../generated";
import { useWaitForTransaction} from "wagmi";
import { Typography} from "@mui/material";


const Counter = () => {

    const {
        config,
    } = usePrepareWagmiMintExampleStore({
        args: []
    } as any)
    const { data, error, isError, write } = useWagmiMintExampleStore(config)

    const { isLoading, isSuccess } = useWaitForTransaction({
        hash: data?.hash,
    } as any)


    const {data:  likes, refetch: refechLikes} = useWagmiMintExampleRetrieveLikes()
    const {data:  lastUpdated, refetch: refetchUpdated} = useWagmiMintExampleRetrieveDate()

    useEffect(()=> {
        refechLikes()
        refetchUpdated()
    }, [isLoading, isSuccess])


    const likestring = (likes && BigInt(likes as any)?.toString() ) || '0'

    return (
        <div>
            <div>

                <div   style={{  fontSize: '3em' }}>
                    {likestring}
                </div>

                <button
                    className="btn btn-primary m-3 btn-lg"
                    style={{ margin: '10px 0', padding: '10px 20px', fontSize: '1.5em' }}
                    disabled={isLoading}
                    onClick={()=>{write?.()}}
                >
                    {isLoading ? 'Confirming...' : 'Like'}
                </button>
              {/*  <Typography variant="body1" component="div">

                    Last Updated: <span id="lastUpdated">{lastUpdated ? new Date(Number(lastUpdated as any) * 1000).toISOString() : 'N/A'}</span>
                </Typography>*/}
            </div>
        </div>
    );
};

export default Counter;