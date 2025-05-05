type BlogPost = {
    id: string;
    title: string;
    content?: string;
    author?: string;
    publishedAt: Date;
};
  
type ProcessedPost<BlogPostType, 
                    ReadOnlyType extends keyof BlogPostType, 
                    RequiredType extends keyof BlogPostType> 
                    = Readonly<Pick<BlogPostType, ReadOnlyType>> 
                    & Required<Pick<BlogPostType, RequiredType>>
                    & Omit<BlogPostType, ReadOnlyType | RequiredType>;

type FinalPost = ProcessedPost<BlogPost, "id" | "publishedAt", "title" | "content">;