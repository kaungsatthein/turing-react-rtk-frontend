import React from 'react'
import Movie from "@/app/types/movie";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import styles from './MovieUI.module.css'
import Image from "next/image";
import { Button } from "@/components/ui/button"
import {useRouter} from "next/navigation";


const MovieUi = ({movie} : {movie: Movie}) => {
    const router = useRouter();
    const handleDetail = () => {
        router.push(`/movies/${movie._id}`)
    }
    return (

            <Card className={styles.movieCard}>
                <Image
                    src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1159&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    width={400}
                    height={200}
                    alt="Avatar"
                />
                <CardHeader className="flex flex-row justify-between items-center p-4">
                    <div>
                        <CardTitle>{movie.title}</CardTitle>
                        <CardDescription>{movie.year}</CardDescription>
                    </div>
                    <Button onClick={handleDetail}>Details</Button>
                </CardHeader>
                <CardContent>
                    <p>{movie.director.name}</p>
                    <p>{movie.director.phoneNo}</p>
                </CardContent>
            </Card>
    )
}
export default MovieUi
