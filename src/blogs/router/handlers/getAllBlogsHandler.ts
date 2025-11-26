import {Request, Response} from 'express';
import {blogsRepository} from "../../repositories/blogsRepository";
import {mapBlogToViewModel} from "../../mapers/mapBlogToViewModel";

export const getAllBlogsHandler = async (req: Request, res: Response) => {
    const allBlogs = await blogsRepository.findAll()
    const allBlogsViewModel = allBlogs.map(mapBlogToViewModel);
    res
        .status(200)
        .json(allBlogsViewModel);
}