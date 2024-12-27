import React from 'react'
import {Spinner} from "@/app/components/spinner";

const Loading = () => {
    return (
        <div className="flex justify-center mt-20">
            <Spinner>Loading...</Spinner>
        </div>
    )
}
export default Loading
