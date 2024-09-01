import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredEstate } from "../../utility/localstorage";
import ViewDetails from "./ViewDetails";
import { Helmet } from "react-helmet";


const ViewedProp = () => {

    const estates = useLoaderData();

    const [viewedEstates, setViewedEstates] = useState([]);

    useEffect( () => {
        const storedEstateIds = getStoredEstate();
        if(estates.length > 0){

            // const estatesViewed = estates.filter(estate => storedEstateIds.includes(estate.id));

            const estatesViewed = [];
            for(const id of storedEstateIds){
                const estate = estates.find(estate => estate.id === id);
                if(estate){
                    estatesViewed.push(estate)
                }
            }
            setViewedEstates(estatesViewed)
        }
    },[])

    return (
        <div>
            <Helmet>
                <title>Viewed Properties</title>
            </Helmet>
            <div className="grid grid-cols-1 gap-10 mt-10 animate__animated animate__zoomIn">
            {
                viewedEstates.map(estate => <ViewDetails
                key={estate.id}
                estate={estate}
                ></ViewDetails>)
            }
            </div>

        </div>
    );
};

export default ViewedProp;