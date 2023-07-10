"use client";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { useEffect, useState } from "react";

export interface ToolType {
    id: number;
    code: String;
    type: String;
    brand: String;
    dailyCharge: number;
    weekdayCharge: boolean;
    weekendCharge: boolean;
    holidayCharge: boolean;
}

export default function Tools() {
    const [tools, setTools] = useState<ToolType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        fetch(`http://localhost:8080/tools`)
            .then((res) => res.json())
            .then((data) => {setTools(data); setLoading(false);});
    }, [])
    
    return (
      <>
        <h1>All tools</h1>
        <Box
            sx={{
            marginTop: 2,
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            rowGap: 1,
            columnGap: 1,
            alignItems: 'center',
            '> p': {
                margin: 0,
            }
            }}
        >
            <h5>
                Tool Code
            </h5>
            <h5>
                Tool Type
            </h5>
            <h5>
                Tool Brand
            </h5>
            <h5>
                Daily Charge
            </h5>
            {loading && 
                <CircularProgress />
            }
            {tools.map((tool) => (
                <>
                    <p>{tool.code}</p> <p>{tool.type}</p> <p>{tool.brand}</p> <p>{tool.dailyCharge}</p>
                </>
            
            ))}
        </Box>
      </>
    );
  }