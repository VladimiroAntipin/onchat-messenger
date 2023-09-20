'use client';

import { SessionProvider } from "next-auth/react";

interface AuthContenxtProps {
    children: React.ReactNode;
}

export default function AuthContenxt({
    children
}: AuthContenxtProps) {
    return <SessionProvider>{children}</SessionProvider>
}