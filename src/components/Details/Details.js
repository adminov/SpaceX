import React, {useEffect, useState} from "react";
import { useHistory } from 'react-router-dom';
import Youtube from "react-youtube";
import './Details.css';
import useLaunches from "../useLaunches/useLaunches";
import Main from "../Main/Main";

const Details = (props) => {

    const [launch, setLaunch] = useState(null);
    const { getLaunches } = useLaunches();

    useEffect(() => {
       setLaunch(getLaunches(props.match.params.id));
    }, [getLaunches]);

    const history = useHistory();

    if (!launch) return null;
    return(
        <>
            <Main name={launch.name}/>
            <main className="details">
                <div className="container">
                    <div className="details-row">
                        <div className="details-image">
                            <img src={launch.links.patch.small} alt={launch.name} />
                        </div>
                        <div className="details-content">
                            <p className="details-description">{launch.details}</p>
                        </div>
                    </div>
                    <Youtube className='details-youtube' videoId={launch.links.youtube_id} />
                </div>
                <a onClick={history.goBack} className="button button-back">go back</a>
            </main>
        </>
    )
};

export default Details;