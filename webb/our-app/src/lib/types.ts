// types.ts
export type DocumentItem = {
    id: string;
    title: string;  
    updatedTime: string;
    thumbnails?: string[];
}

export type TeamMember = {
    id: string;
    name: string;
    role: string;
    avatar?: string;
    initial?: string;
    isOnline: boolean;
}