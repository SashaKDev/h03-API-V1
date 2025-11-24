import {Request, Response} from 'express';
import {Blog} from "../../types/blog";
import {blogsRepository} from "../../repositories/blogsRepository";

export const createBlogHandler = async (req: Request, res: Response) => {
    const newBlog: Blog = {
        name: req.body.name,
        description: req.body.description,
        websiteUrl: req.body.websiteUrl,
        createdAt: new Date().toISOString(),
        isMembership: false,
    }

    try {
        await blogsRepository.create(newBlog);
    } catch (error) {
        console.log(error);
    }

    res
        .status(201)
        .json(newBlog)
}