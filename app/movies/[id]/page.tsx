"use client"

import React from 'react'
import {useParams, useRouter} from "next/navigation";
import {Button} from "@/components/ui/button";
import Image from "next/image";

import {Card} from "@/components/ui/card";


const MovieDetails = () => {
    const {id} = useParams();
    const router = useRouter();

    const handleBack = () => {
        router.back();
    }

    return (
        <>
            <Button className={"mb-10"} variant={"outline"} onClick={handleBack}>Back</Button>
            <Card>
                <Image
                    src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1159&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    width={600}
                    height={200}
                    alt="Avatar"
                />
                <div>
                    <h1>Movie Details</h1>
                    <p>Movie ID: {id}</p>
                    <p>Title: Avatar</p>
                    <p>Director: John Doe</p>
                    <p>Year: 2022</p>
                </div>
            </Card>
        </>
    )
}
export default MovieDetails
