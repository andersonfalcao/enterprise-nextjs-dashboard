import { NextResponse } from "next/server";

export async function GET() {
    const users = [
        { id: 1, name: 'John Doe', email: 'jonh@email.com', avatarUrl: 'https://i.pravatar.cc/150?img=1' },
        { id: 2, name: 'Ana Den', email: 'ana@email.com', avatarUrl: 'https://i.pravatar.cc/150?img=2' },
        { id: 3, name: 'Bob Smith', email: 'bob@email.com', avatarUrl: 'https://i.pravatar.cc/150?img=3' }
    ];

    return NextResponse.json(users);
}
