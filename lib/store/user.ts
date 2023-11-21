import { User } from "@supabase/supabase-js";
import { create } from "zustand";

interface UserState {
	user: User | undefined;
	setUser: (user: User | undefined) => void;
}

export const useUser = create<UserState>()((set) => ({
	user: undefined,
	setUser: (user: User | undefined) => set(() => ({ user })),
}));
