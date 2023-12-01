import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getPostData(fileName) {
    const filePath= path.join(postsDirectory, fileName);
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    const {data, content} = matter(fileContent);

    const postSlug = fileName.replace(/\.md$/, '');

    const postData = {
        slug: postSlug,
        ...data,
        content
    };
    return postData;
}

export function getPostFiles() {
    return fs.readdirSync(postsDirectory);
}

export function getAllPosts() {
    const postFiles = getPostFiles();
    
    const allPosts = postFiles.map(postFile => {
        return getPostData(postFile);
    })

    const sortedPosts = allPosts.sort((postA, postB) => postA.date > postB.date ? -1 : 1);

    return sortedPosts;
}

export function getFeaturedPosts() { 
    const allPosts = getAllPosts(); 
    const featurePosts = allPosts.filter((post) => post.isFeatured)

    return featurePosts;
}