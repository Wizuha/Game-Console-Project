import React from 'react'
import './Purchase.css'
import { useMyContext } from '../../context/searchContext'
import TabPurchase from '../../components/TabPurchase/TabPurchase'

export default function Purchases() {
    const { purchases } = useMyContext()
  return (
    <div>

        {
            purchases.map((purchase) => (
                <TabPurchase 
                    purchase = {purchase}
                    key = {purchase.id_console}
                />
            ))
        }
    </div>
  )
}
