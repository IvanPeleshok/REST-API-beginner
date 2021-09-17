import { modelPost } from './PostModel.js';
import { FileService } from '../fileService.js';

export class PostService {
    static async create(post, image) {
        let createdPost;
        const fileName = FileService.saveFile(image);
        post = Object.assign(post, { image: fileName });
        createdPost = await modelPost.create(post);
        return createdPost;
    }

    static async getAll() {
        const posts = await modelPost.find();
        return posts;
    }

    static async getOne(id) {
        if (!id) {
            res.status(400).json({message: 'Id not specified'});
        }
        const post = await modelPost.findById(id);
        return post;
    }

    static async update(post) {
        if (!post._id) {
            res.status(400).json({message: 'Id not specified'});
        }
        const updatePost = await modelPost.findByIdAndUpdate(post._id, post, { new: true });
        return updatePost;
    }

    static async delete(id) {
        if (!id) {
            res.status(400).json({message: 'Id not specified'});
        }
        const post = await modelPost.findByIdAndDelete(id);
        return post;
    }
}