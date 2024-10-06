import {makeAutoObservable} from "mobx";

export default class PostStore {
    constructor() {
        this._posts = [
            {
                id: 1,
                title: "Introduction to JavaScript",
                content: "JavaScript is a versatile programming language used for web development.",
                dislikes_count: 5,
                likes_count: 120,
                views_count: 1500,
                user_id: 1
            },
            {
                id: 2,
                title: "Understanding React Hooks",
                content: "React hooks allow you to use state and other features in functional components.",
                dislikes_count: 3,
                likes_count: 98,
                views_count: 2000,
                user_id: 2
            },
            {
                id: 3,
                title: "A Guide to Node.js",
                content: "Node.js is a runtime environment that allows JavaScript to run on the server-side.",
                dislikes_count: 2,
                likes_count: 250,
                views_count: 3200,
                user_id: 3
            },
            {
                id: 4,
                title: "Mastering CSS Grid",
                content: "CSS Grid is a powerful layout system for creating responsive designs.",
                dislikes_count: 1,
                likes_count: 85,
                views_count: 1000,
                user_id: 1
            },
            {
                id: 5,
                title: "Building APIs with Express.js",
                content: "Express.js is a fast and minimalistic web framework for Node.js.",
                dislikes_count: 4,
                likes_count: 145,
                views_count: 2200,
                user_id: 2
            }
        ];
        makeAutoObservable(this)
    }

    setPosts(posts) {
        this._posts = posts;
    }

    get posts() {
        return this._posts;
    }
}