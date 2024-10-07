import { NextResponse } from "next/server";

export async function POST( req : Request ) : Promise<NextResponse> {

    const { email, username, password, name, phone } = await req.json();

    const response : Response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/signup`, {
        method : 'POST', 
        headers : { 'Content-Type' : 'application/json' },
        body : JSON.stringify({ email, username, password, name, phone })
    });

    const data = await response.json();

    return NextResponse.json(data, { status : response.status });
};