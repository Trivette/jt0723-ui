"use client";
import { useEffect, useState } from "react";
import RentalAgreement, { RentalAgreementType } from "../rental-agreement";
import CircularProgress from "@mui/material/CircularProgress";

export default function Rentals() {
    const [rentals, setRentals] = useState<RentalAgreementType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        fetch(`http://localhost:8080/rentals`)
            .then((res) => res.json())
            .then((data) => {setRentals(data); setLoading(false);});
    }, []);

    return (
      <>
        <h1>All rentals</h1>
        {loading && 
            <CircularProgress />
        }
        {!loading && !rentals.length &&
            <p>
                No rentals exist
            </p>
        }
        {rentals.map(rental => (
            <RentalAgreement {...rental}/>
        ))}
      </>
    );
  }