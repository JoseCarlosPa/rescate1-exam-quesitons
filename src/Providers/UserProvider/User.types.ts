export type tUserContext = {
    user: tUser | null;
    setUser: (user: tUser | null) => void;
}

export type tUser = {
    id: string | null;
    email: string | null;
    name: string | null;
    photoURL: string | null;
    role: string | null;
}