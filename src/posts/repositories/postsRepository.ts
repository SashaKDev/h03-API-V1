import {Post} from "../types/post";
import {PostInputDto} from "../dto/post-input.dto";
import {WithId} from "mongodb";
import {postsCollection} from "../../db/mongo.db";

//
export const postsRepository = {
    async findAll(): Promise<WithId<Post>[]>{
        return await postsCollection.find().toArray();
    },
//
//     findById(id: string): Post | null{
//         return db.posts.find(post => post.id === id) ?? null
//     },
//
    async create(post: Post): Promise<WithId<Post>> {
        const insertedPost = await postsCollection.insertOne(post);
        return ({_id: insertedPost.insertedId, ...post});
    },
//
//     update(id: string, dto: PostInputDto) {
//         const foundPost = db.posts.find(post => post.id === id);
//         const foundBlog = db.blogs.find(blog => blog.id === dto.blogId);
//         if (foundPost && foundBlog) {
//             foundPost.title = dto.title;
//             foundPost.shortDescription = dto.shortDescription;
//             foundPost.content = dto.content;
//             foundPost.blogId = dto.blogId;
//             foundPost.blogName = foundBlog.name;
//         }
//     },
//
//     delete(id: string) {
//         db.posts = db.posts.filter(posts => posts.id !== id);
//     }
};