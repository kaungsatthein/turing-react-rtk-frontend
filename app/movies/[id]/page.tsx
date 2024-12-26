"use client"

import React from 'react'
import {useParams} from "next/navigation";

const MovieDetails = () => {
    const {id} = useParams();
    return (
        <div>Movie Detail {id}</div>
    )
}
export default MovieDetails
