import { createContext, useState } from 'react';

export const PaymentContext = createContext({});

const PaymentContextProvider = ({value, children}) => {
    const [itemDetails, setItemDetails] = useState(value);
    const [buyerDetail, setBuyerDetail] = useState();
    const [total, setTotal] = useState(148.98);
    const updateItemCount = (itemIdx, count) => {
        setItemDetails(oldItems => {
        let newItems = [...oldItems];
        newItems[itemIdx].count = count;
        return newItems;
        })
    }
    const updateTotal = () => {
        let sum = itemDetails.reduce((prev, curr) => {
        return prev + parseInt(curr.count) * parseFloat(curr.currentPrice)
        }, 0);
        if(sum > 0) {
            sum += 19;
        }
        setTotal(sum.toFixed(2));
    }
    return <PaymentContext.Provider value={{
        itemDetails: itemDetails,
        buyerDetail: buyerDetail,
        total: total,
        updateItemCount,
        setBuyerDetail,
        updateTotal
      }}>{children}</PaymentContext.Provider>
}

export default PaymentContextProvider;