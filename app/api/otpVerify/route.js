import axios from "axios";
import { NextResponse } from "next/server";
var convert = require("xml-js");
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
  const OTP = data.OTP;
  console.log("OTP", OTP);

  try {
    const otpResponse = await axios.get(
      `${process.env.SIGNIN_OTP_URL}OTP=${OTP}`,
    );
    console.log(
      "otpResponse:",
      otpResponse,
      "OTP RESPONSE DATA:",
      otpResponse.data,
    );

    const xmlResponse = otpResponse.data;
    const result = convert.xml2json(xmlResponse, { compact: true, spaces: 4 });
    let jsonResult = JSON.parse(result);
    jsonResult = JSON.parse(jsonResult.string._text);

    console.log("jsonResult", jsonResult);

    return NextResponse.json(
      {
        success: true,
        message: jsonResult.Message,
        statusCode: jsonResult.SuccessCode,
      },
      { status: jsonResult.SuccessCode },
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      {
        success: false,
        message: jsonResult.Message,
      },
      { status: 500 },
    );
  }
}
