import {Request, Response} from 'express';
import {blogsRepository} from "../../repositories/blogsRepository";

export const getAllBlogsHandler = async (req: Request, res: Response) => {
    const allBlogs = await blogsRepository.findAll()
    res
        .status(200)
        .json(allBlogs);
}