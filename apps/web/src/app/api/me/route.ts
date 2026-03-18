import { NextResponse  } from "next/server";

export async function GET() {
    // Simulate fetching user data from a database or authentication service
    const user = {
        id: 1,
        name: "John Doe",
        email: "jonh@email.com",
        avatarUrl: "https://i.pravatar.cc/150?img=1",
        role: 'admin'
    };

    return NextResponse.json(user);
}
