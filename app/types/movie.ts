import Director from "@/app/types/director";

export default interface Movie {
    _id? : string,
    title: string,
    year: number
    director: Director,
}

