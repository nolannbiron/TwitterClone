export interface Attachments{
   images: any[],
   gif: {
      type?: string,
   }
};

interface PostContent{
   content: string;
   attachments: Attachments
}

export interface Post extends PostContent {
   _id: string;
   updated?: string;
   created?: string;
   _v?: number;
   title?: string;
   author?: string;
   subComment?: any[];
}

export interface FeedState {
   posts: Post[];
}

export interface AuthState {
   user: User;
   loggedIn: boolean;
   loading: boolean;
   initialized: boolean;
}

export interface User{
   _id?: string;
   name?: string;
   firstname?: string;
   email?: string;
   birthday?: string;
   picture?: string;
}

export interface SignUpCredentials extends User {
   password: string;
} 

export interface LoginCredentials {
   email: string;
   password: string;
}

export interface PostState {
   newPost: PostContent;
}

export interface BookmarksState {
   bookmarks: Post[];
}

export interface State {
   feed: FeedState;
   auth: AuthState;
   post: PostState;
   bookmarks: BookmarksState;
}
  