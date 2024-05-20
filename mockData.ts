export interface User {
  id: number;
  fullName: string;
  username: string;
  email: string;
  role: string;
  avatar: string;
}

export const initialUsers: User[] = [
  {
    id: 1,
    fullName: "Zachary Gomez",
    username: "zachary-gomez",
    email: "zachary-gomez@gmail.com",
    role: "Editor",
    avatar: "https://via.placeholder.com/50", // Geçici bir avatar URL'si
  },
  // Diğer kullanıcı verileri...
];
export interface User {
  id: number;
  fullName: string;
  username: string;
  email: string;
  role: string;
  avatar: string;
}

