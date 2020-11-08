import {useEffect, useState} from 'react';
import FetchDate from "../../service/FetchDate";

const fetchData = new FetchDate();

const useLaunches = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData.getLaunches()
            .then(launches => setData(state => [...launches]))
    }, []);

    const getLaunches = id => data.find(item => item.id === id);

    return{data, getLaunches}
};

export default useLaunches;