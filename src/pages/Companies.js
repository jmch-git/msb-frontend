import { useState, useEffect } from "react";

import CompanyCards from "../components/CompanyCards";


function Companies(props) {
    return (
        <h1>Companies List Page</h1>
    )

//**********REVIEW and UNCOMMENT after Backend Deployment************
    // create state to hold companies
    // const [companies, setCompanies] = useState(null);

    // create function to make api call
    // const getCompanyData = async () => {
    //     // make api call and get response
    //     const response = await fetch(props.URL + "companies");
    //     // turn response into JavaScript object
    //     const data = await response.json();
    //     // set the companies state to the data
    //     setCompanies(data);
    // };

    // make an inital call for the data inside of useEffect,
    //  so it only happens once on component load
    // useEffect(() => getCompanyData(), []);

    // define a function that will return the JSX needed
    //  once we get the data

    // make sure there is data first with loaded function
    // const loaded = () => {
    //     return (
    //             companies.map((company) => (
    //                <CompanyCards 
    //                     {...ele}
    //                     key={index}
    //                 />    
    //             ))
    //     );
    // }

    // return companies ? loaded() : <h1>Loading...</h1>;
}

export default Companies;