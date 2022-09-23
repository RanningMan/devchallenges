import { useContext } from 'react';
import './Payment.css';
import { PaymentContext } from './PaymentContext';
import { useEffect } from 'react';

const Item = ({
	photo,
	itemName,
	currentPrice,
	previousPrice,
	count,
	updateCount,
	index,
}) => {
	return (
		<div className='item'>
			<div className='item-photo'>
				<img src={photo} alt={itemName} />
			</div>
			<div className='item-cost'>
				<div className='item-info'>
					<div className='item-name'>{itemName}</div>
					<div className='item-price'>
						<span className='current-price'>${currentPrice}</span>
						<span className='previous-price'>${previousPrice}</span>
					</div>
				</div>
				<div className='item-count'>
					<button
						onClick={() => {
                            if(count > 0)
							    updateCount(index, count - 1);
						}}
					>
						-
					</button>
					{count}
					<button
						onClick={() => {
							updateCount(index, count + 1);
						}}
					>
						+
					</button>
				</div>
			</div>
		</div>
	);
};

const Payment = () => {
	const { itemDetails, updateItemCount, updateTotal, total } = useContext(PaymentContext);
    useEffect(() => {
        updateTotal();
    }, [updateTotal]);
	return (
		<div className='payment'>
			{itemDetails.map((item, idx) => (
				<Item
					index={idx}
					photo={item.photo}
					itemName={item.name}
					currentPrice={item.currentPrice}
					previousPrice={item.previousPrice}
					count={item.count}
					updateCount={updateItemCount}
				></Item>
			))}
			<div className='checkout-line'>
				<span>Shipping</span>
				<span>$19</span>
			</div>
			<div className='checkout-line'>
				<span>Total</span>
				<span>${total}</span>
			</div>
		</div>
	);
};

export default Payment;
