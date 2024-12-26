"use client"

import React from 'react'
import Movie from "@/app/types/movie";
import MovieUI from "@/app/components/MovieUI/index";
import { Button } from "@/components/ui/button"


const movies: Movie[] = [
    {
        "_id" : "1",
        "title" : "Avatar",
        "director" : {
            "name" : "John Doe",
            "phoneNo": "0997",
            "_id" : "1"
        },
        "year" : 2022
    },
    {
        "_id" : "2",
        "title" : "Avatar 2",
        "director" : {
            "name" : "John Doe 2",
            "phoneNo": "0997",
            "_id" : "2"
        },
        "year" : 2022
    },
    {
        "_id" : "3",
        "title" : "Avatar 3",
        "director" : {
            "name" : "John Doe 3",
            "phoneNo": "0997",
            "_id" : "3"
        },
        "year" : 2022
    }
]

const Movies = () => {
    return (
        <>
            <Button className={"mb-10"}>Create</Button>
            <div className={"flex flex-row gap-2"}>
                {
                    movies && movies.map(movie => (
                        <MovieUI key={movie._id} movie={movie}/>
                    ))
                }
            </div>
        </>
    )
}
export default Movies