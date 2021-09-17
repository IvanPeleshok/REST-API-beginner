import { modelPost } from './PostModel.js';
import { PostService } from './PostService.js';

export class PostController {
    static async create(req, res) {
        try {
            const post = await PostService.create(req.body, req.files && req.files.image);
            res.json(post);
        } catch (error) { 
            res.status(500).json(error);
        }
    }

    static async getAll(req, res) {
        try {
            const posts = await PostService.getAll();
            return res.json(posts);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async getOne(req, res) {
        try {
            const post = await PostService.getOne(req.params.id);
            return res.json(post);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async update(req, res) {
        try {
            const updatePost = await PostService.update(req.body);
            return res.json(updatePost);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async delete(req, res) {
        try {
            const post = await PostService.delete(req.params.id);
            return res.json(post);
        } catch (error) {
            res.status(500).json(error);
        }
    }
}