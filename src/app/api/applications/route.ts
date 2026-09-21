import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const apiUrl = process.env.APPLICATION_API_URL;
  const apiKey = process.env.APPLICATION_API_KEY;

  if (!apiUrl || !apiKey) {
    return NextResponse.json(
      { error: "Configuration serveur manquante" },
      { status: 500 },
    );
  }

  try {
    const formData = await request.formData();

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "x-application-api-key": apiKey,
        "x-application-source": "syslearn-groupe",
      },
      body: formData,
    });

    const contentType = response.headers.get("content-type") ?? "";
    const payload = contentType.includes("application/json")
      ? await response.json()
      : await response.text();

    if (!response.ok) {
      return NextResponse.json(
        typeof payload === "string" ? { error: payload } : payload,
        { status: response.status },
      );
    }

    //TODO: setup mail
    return NextResponse.json(
      typeof payload === "string" ? { message: payload } : payload,
      { status: response.status },
    );
  } catch {
    return NextResponse.json(
      { error: "Erreur lors de l'envoi de la candidature" },
      { status: 500 },
    );
  }
}
