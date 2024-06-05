import { useState, useEffect } from "react";
import { useAppSelector } from "./redux-hooks";
import { useLocation } from "react-router";
import { path } from "../constants/pages";
import strings from "../helpers/strings";


const data = [
    { city: "Amman", name: "Amman" },
    { city: "Irbid", name: "Irbid" },
    { city: "Zarqa", name: "Zarqa" },
    { city: "Mafrag", name: "Mafrag" },
    { city: "Ajloun", name: "Ajloun" },
    { city: "Jerash", name: "Jerash" },
    { city: "Madaba", name: "Madaba" },
    { city: "Balqa", name: "Balqa" },
    { city: "Karak", name: "Karak" },
    { city: "Tafileh", name: "Tafileh" },
    { city: "Maan", name: "Maan" },
    { city: "Aqaba", name: "Aqaba" },
];

export const usePageTitle = () => {
    const location = useLocation();

    const { stateData } = useAppSelector((state) => state.filter);

    const [title, setTitle] = useState("");
    const [rentTitle, setRentTitle] = useState(strings.apartmentToRent);
    const [totalOffersTitle, setTotalOffersTitle] = useState(strings.totalOffers);

    useEffect(() => {
        switch (location.pathname) {
            case path.home:
                for (let i = 0; i < data.length; i++) {
                    if (data[i].city === stateData.city) {
                        setRentTitle(`${strings.apartmentToRentIn} ${data[i].name}`);
                        setTotalOffersTitle(
                            `Propsal for ${data[i].name.replace(/.$/, "у")}`
                        );
                    }
                }
                break;
            case path.cottages:
                for (let i = 0; i < data.length; i++) {
                    if (data[i].city === stateData.city) {
                        setTitle(`${strings.rentOfCottagesIn} ${data[i].name}`);
                    } else if (!stateData.city) {
                        setTitle(strings.rentOfCottages);
                    }
                }
                break;
            // case path.baths:
            //     for (let i = 0; i < data.length; i++) {
            //         if (data[i].city === stateData.city) {
            //            setTitle(`Аренда бань и саун в ${data[i].name}`);
            //         } else if (!stateData.city) {
            //            setTitle("Аренда бань и саун");
            //         }
            //     }
            //     break;
            case path.cars:
                for (let i = 0; i < data.length; i++) {
                    if (data[i].city === stateData.city) {
                        setTitle(`Авто на прокат в ${data[i].name}`);
                    } else if (!stateData.city) {
                        setTitle("Авто на прокат");
                    }
                }
                break;
            default:
        }
    }, [location.pathname, stateData.city, rentTitle, setRentTitle]);

    return {
        title,
        rentTitle,
        totalOffersTitle,
    };
};