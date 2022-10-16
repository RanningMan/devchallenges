import { useEffect, useState } from 'react';

export const useFetchStayList = (country, city, guestNumber) => {
    const [stayList, setStayList] = useState([]);
    useEffect(() => {
        const fetchStays = async () => {
            try {
                const response = await fetch('./stays.json');
                const stayList = (await response.json()).filter(
                    (obj) => {
                        let res = true;
                        if(country) {
                            res &= obj.country === country;
                        }
                        if(city) {
                            res &= obj.city === city;
                        }
                        if(guestNumber) {
                            res &= obj.maxGuests >= guestNumber;
                        }
                        return res;
                    }
                );
                setStayList(stayList);
            } catch (e) {
                throw Error(e.message);
            }
        }
        fetchStays();
    }, [country, city, guestNumber]);
    return stayList;
};
