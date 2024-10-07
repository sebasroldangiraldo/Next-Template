
import { NextResponse } from "next/server";

export async function GET( request : Request ): Promise<NextResponse> { 

    const token = request.headers.get('Authorization');

    try {

    const response : Response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/products`, {
        method : 'GET', 
        headers : { 
            'Authorization' : `${token}`,
            'Content-Type' : 'application/json'
         },
    });

    const data = await response.json();

    return NextResponse.json(data, { status : response.status });
        
    } catch (error) {
        console.log(error);
        throw new Error('Error al realizar la solicitud');
    }
};