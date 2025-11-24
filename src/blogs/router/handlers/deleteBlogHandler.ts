import {Request, Response} from "express";
import {blogsRepository} from "../../repositories/blogsRepository";

export const deleteBlogHandler = async (req: Request, res: Response) => {
    const blog = await blogsRepository.findById(req.params.id);
    if (!blog) {
        res.sendStatus(404);
    }

    try {
        await blogsRepository.delete(req.params.id);
    } catch (error) {
        res.sendStatus(500);
    }

    res.sendStatus(204);
}