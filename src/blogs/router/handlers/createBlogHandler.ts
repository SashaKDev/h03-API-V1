import {Request, Response} from 'express';
import {Blog} from "../../types/blog";
import {blogsRepository} from "../../repositories/blogsRepository";
import {mapBlogToViewModel} from "../../mapers/mapBlogToViewModel";

export const createBlogHandler = async (req: Request, res: Response) => {
    try {
        const newBlog: Blog = {
            name: req.body.name,
            description: req.body.description,
            websiteUrl: req.body.websiteUrl,
            createdAt: new Date().toISOString(),
            isMembership: false,
        }


        const createdBlog = await blogsRepository.create(newBlog);
        const createdBlogViewModel = mapBlogToViewModel(createdBlog);

        res
            .status(201)
            .json(createdBlogViewModel);
    } catch (error) {
        res.sendStatus(500);
    }
}