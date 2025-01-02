import React from 'react'
import Review from "@/app/types/review"

const ReviewUI = ({review} : {review : Review}) => {


    return (
        <>
            <div>
                <div className={"flex flex-row justify-between mt-4"}>
                    <h1 className="scroll-m-20 text-xl font-semibold tracking-tight">
                        {review.name}
                    </h1>
                    <p className="leading-7">
                        {review.rating} out of 5
                    </p>
                </div>
                <p className="leading-7 [&:not(:first-child)]:mt-1.5 border-b pb-4">
                    {review.review}
                </p>
            </div>
        </>
    )
}
export default ReviewUI
