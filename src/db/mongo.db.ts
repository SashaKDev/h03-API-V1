import {Collection, Db, MongoClient} from 'mongodb';
import {Blog} from "../blogs/types/blog";
import {Post} from "../posts/types/post";

export let blogsCollection: Collection<Blog>;
export let postsCollection: Collection<Post>;

export const runDb = async (dbUrl: string) => {

    const client = new MongoClient(dbUrl);
    const db: Db = client.db('incubator-db');
    blogsCollection = db.collection('blogs');
    postsCollection = db.collection('posts');

    try {
        await client.connect();
        await db.command({ping: 1});
        console.log("✅ Connected to MongoDB");
    } catch (err) {
        await client.close();
        throw new Error("❌ Error connecting to MongoDB");
    }


}