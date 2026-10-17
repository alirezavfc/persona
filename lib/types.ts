export type PersonaUser = {
  id: string;
  name: string;
  bio: string;
  followers: number;
  following: number;
};

export type PersonaPost = {
  id: string;
  authorId: string;
  text: string;
  createdAt: string;
  likes: number;
  replyIds: string[];
  replyTo?: string;
};
