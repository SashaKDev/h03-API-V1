import {Request, Response} from "express";
import {postsRepository} from "../../repositories/postsRepository";

export const getAllPostsHandler = async (req: Request, res: Response) => {
    const foundPosts = await postsRepository.findAll();
    res
        .status(200)
        .json(foundPosts);
}