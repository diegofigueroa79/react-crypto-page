import React from "react";
import { useSelector } from 'react-redux'

export function CryptoList() {
    // grab c
    const cryptocurrencies = useSelector( state => state.crypto.cryptocurrencies )
    return (
        <ul>
            { cryptocurrencies.map( cryptocurrency => (
                    <li>{cryptocurrency.name}</li>
            ))
            }
        </ul>
    )
}