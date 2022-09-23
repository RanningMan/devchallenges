import { useState, useContext } from "react";
import './info.css';
import { PaymentContext } from './PaymentContext';

const Info = () => {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [fullname, setFullname] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [postalcode, setPostalcode] = useState('');
    const { itemDetails, total } = useContext(PaymentContext);
    const [red, setRed] = useState(false);
    const onButtonClick = () => {
        if(email && fullname && address && city && country && postalcode) {
            alert(`Your shipping details: ${email}, ${phone}, ${fullname}, ${address}, ${city}, ${country}, ${postalcode};
            your receipt: ${JSON.stringify(itemDetails)}, total cost: ${total}`);
        } else {
            alert('invalid input!')
        }
    }
    const validateEmail = () => {
        if(!email.match(/[0-9]*[a-z]+[0-9]*@[a-z]+\.[a-z]+/g)) {
            setRed(true);
        }
    }
    return (
        <form className='info'>
            <div className='section'>Contact information</div>
            <div className='input'>
                <div className='label'>E-mail</div>
                <div className={red ? 'input-line red' : 'input-line'}>
                    <i class="material-symbols-outlined">email</i>
                    <input type='text' placeholder='Your email' onChange={(e) => {setRed(false); setEmail(e.target.value)}} onBlur={validateEmail} required/>
                </div>
            </div>
            <div className='input'>
                <div className='label'>Phone</div>
                <div className='input-line'>
                    <i class="material-symbols-outlined">call</i>
                    <input type='text' placeholder='Your phone' onChange={(e) => setPhone(e.target.value)}/>
                </div>
            </div>
            <div className='section'>Shipping address</div>
            <div className='input'>
                <div className='label'>Full name</div>
                <div className='input-line'>
                    <i class="material-symbols-outlined">account_circle</i>
                    <input type='text' placeholder='Your name' onChange={(e) => setFullname(e.target.value)} required/>
                </div>
            </div>
            <div className='input'>
                <div className='label'>Address</div>
                <div className='input-line'>
                    <i class="material-symbols-outlined">home</i>
                    <input type='text' placeholder='Your address' onChange={(e) => setAddress(e.target.value)} required/>
                </div>
            </div>
            <div className='input'>
                <div className='label'>City</div>
                <div className='input-line'>
                    <i class="material-symbols-outlined">location_city</i>
                    <input type='text' placeholder='Your city' onChange={(e) => setCity(e.target.value)} required/>
                </div>
            </div>
            <div className='last-row'>
                <div className='input'>
                    <div className='label'>Country</div>
                    <div className='input-line'>
                        <i class="material-symbols-outlined">public</i>
                        <select onChange={(e) => setCountry(e.target.value)} required>
                            <option value='' disabled selected hidden>Your Country</option>
                            <option value='USA'>USA</option>
                            <option value='China'>China</option>
                            <option value='Canada'>Canada</option>
                        </select>
                    </div>
                </div>
                <div className='input'>
                    <div className='label'>Postal code</div>
                    <div className='input-line'>
                        <i class="material-symbols-outlined">markunread_mailbox</i>
                        <input type='text' placeholder='Your postal code' onChange={(e) => setPostalcode(e.target.value)} required/>
                    </div>
                </div>
            </div>
            <div>
                <input type='checkbox' /> <label>Save this information for next time</label>
            </div>
            <button onClick={onButtonClick}>Continue</button>
        </form>
    )
}

export default Info;