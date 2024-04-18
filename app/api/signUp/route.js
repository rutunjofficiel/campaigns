import { NextResponse } from "next/server";
import { connectToDatabase } from "../../utils/database";

export async function POST(req) {
  const reader = req.body.getReader();
  let data = "";
  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    data += new TextDecoder().decode(value);
  }
  data = JSON.parse(data);
  console.log("data", data);

  try {
    const response = await fetch(process.env.SIGNUP_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const res = await response.json();
    console.log("response:", res);
    if (res.d.SuccessCode == 400) {
      return NextResponse.json(
        {
          success: false,
          message: res?.d.Message,
          statusCode: 400,
        },
        { status: 400 },
      );
    } else {
      return NextResponse.json(
        {
          success: true,
          message: res?.d.Message,
          statusCode: 200,
        },
        { status: 200 },
      );
    }
  } catch (error) {
    console.log("ERROR:", error);
    return NextResponse.json(
      { success: false, message: error },
      { status: 500 },
    );
  }
}
