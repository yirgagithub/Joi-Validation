
export interface blogPost{
    title: string,
    description: string, 
    comments: Comment
}

interface Comment{
    description: string,
    author: string;
    grade: string;
}