import { NextResponse } from "next/server";

export async function GET() {
    console.log('err')
  try {
    const res = await fetch("http://localhost:1337/api/noticias?populate=*", {
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Error al obtener noticias: ${res.status}`);
    }

    const data = await res.json();

    return NextResponse.json(data);
  } catch (error: unknown) {
    console.error("Error en BFF /api/noticias:", error);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}
