import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const schema = Yup.object().shape({
    title: Yup.string().max(15, "Must be 15 characters or less").required("Name is required"),
    year: Yup.number().typeError("Year must be a number").required("Year is required"),
    director: Yup.string().required("Director is required"),
    details: Yup.string().required("Details are required"),
});

const CreateMovieDialog = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: any) => {
        console.log("Form Data:", data);
        reset()
    };

    return (
        <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
                <DialogTitle>Create New Movie</DialogTitle>
                <DialogDescription>
                    Create a new one with details as follows:
                </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="title" className="text-right">
                        Name
                    </Label>
                    <Input
                        id="title"
                        {...register("title")}
                        className="col-span-3"
                    />
                    {errors.title && (
                        <p className="ml-24 col-span-4 text-red-500 text-sm">
                            {errors.title.message}
                        </p>
                    )}
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="year" className="text-right">
                        Year
                    </Label>
                    <Input
                        id="year"
                        {...register("year")}
                        className="col-span-3"
                    />
                    {errors.year && (
                        <p className="ml-24 col-span-4 text-red-500 text-sm">
                            {errors.year.message}
                        </p>
                    )}
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="director" className="text-right">
                        Director
                    </Label>
                    <Input
                        id="director"
                        {...register("director")}
                        className="col-span-3"
                    />
                    {errors.director && (
                        <p className="ml-24 col-span-4 text-red-500 text-sm">
                            {errors.director.message}
                        </p>
                    )}
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="details" className="text-right">
                        Details
                    </Label>
                    <Input
                        id="details"
                        {...register("details")}
                        className="col-span-3"
                    />
                    {errors.details && (
                        <p className="ml-24 col-span-4 text-red-500 text-sm">
                            {errors.details.message}
                        </p>
                    )}
                </div>
                <DialogFooter>
                    <Button type="submit">Create</Button>
                </DialogFooter>
            </form>
        </DialogContent>
    );
};

export default CreateMovieDialog;
