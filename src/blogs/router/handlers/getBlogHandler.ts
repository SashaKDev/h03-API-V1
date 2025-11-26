import {Request, Response} from 'express';
import {blogsRepository} from "../../repositories/blogsRepository";
import {mapBlogToViewModel} from "../../mapers/mapBlogToViewModel";

export const getBlogHandler = async (req: Request, res: Response) => {
    const foundCourse = await blogsRepository.findById(req.params.id);
    if (!foundCourse) {
        res.sendStatus(404);
        return;
    }
    res
        .status(200)
        .json(mapBlogToViewModel(foundCourse));
}