"use client"

import React from 'react'
import { useRouter} from "next/navigation";
import {Button} from "@/components/ui/button";
import Image from "next/image";
import Review from "@/app/types/review";


import ReviewUI from "@/app/components/ReviewUI";

const reviews : Review[] = [
    {
        "_id": "1",
        "name": "K",
        "movie": "Review 1",
        "review": "This movie was amazing!",
        "rating": 4,
    },
    {
        "_id": "2",
        "name": "S",
        "movie": "Review 2",
        "review": "I enjoyed it!",
        "rating": 5,
    },
    {
        "_id": "3",
        "name": "H",
        "movie": "Review 3",
        "review": "I enjoyed it!",
        "rating": 5,
    },
    {
        "_id": "4",
        "name": "S1",
        "movie": "Review 4",
        "review": "I enjoyed it!",
        "rating": 5,
    },
    {
        "_id": "5",
        "name": "S2",
        "movie": "Review 5",
        "review": "I enjoyed it!",
        "rating": 5,
    }
]

const MovieDetails = () => {
    const router = useRouter();

    const handleBack = () => {
        router.back();
    }



    return (
        <>
            <Button className={"mb-10"} variant={"outline"} onClick={handleBack}>Back</Button>

            <div className={"flex flex-row gap-8"}>
                <div>
                    <Image
                        src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1159&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        width={600}
                        height={200}
                        alt="Avatar"
                    />
                </div>
                <div>
                    <h2 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-4xl">
                        Taxing Laughter: The Joke Tax Chronicles
                    </h2>
                    <div className={"flex flex-row justify-between mt-4"}>
                        <h3 className="scroll-m-20 text-1xl font-semibold tracking-tight">
                            Director: John Doe
                        </h3>
                        <h3 className="scroll-m-20 text-1xl font-semibold tracking-tight">
                            Release Date: March 21, 2022
                        </h3>
                    </div>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                        Descriptions
                    </p>
                    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6">
                        Reviews
                    </h3>
                    {
                        reviews.length > 0 && reviews.map ( review => (
                            <ReviewUI review={review} key={review._id}/>
                        ))
                    }
                </div>
            </div>



        </>
    )
}
export default MovieDetails
