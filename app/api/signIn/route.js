import { NextResponse } from "next/server";
import axios from "axios";

var convert = require("xml-js");
export async function POST(req) {
  const reader = req.body.getReader();
  let jsonResult = "";
  let data = "";

  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    data += new TextDecoder().decode(value);
  }
  data = JSON.parse(data);
  const CustID = data.CustID;
  const MobileNo = data.MobileNo;
  try {
    const response = await axios.get(
      `${process.env.SIGNIN_API_URL}?CustID=${CustID}&MobileNo=${MobileNo}`,
    );

    const xmlResponse = response.data;
    const result = convert.xml2json(xmlResponse, { compact: true, spaces: 4 });
    jsonResult = JSON.parse(result);
    jsonResult = JSON.parse(jsonResult.string._text);

    console.log("jsonResult", jsonResult);

    return NextResponse.json(
      {
        success: true,
        message: jsonResult.Message,
        statusCode: jsonResult.Code,
        customerData: jsonResult.loginData,
      },
      { status: jsonResult.Code },
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Error processing request",
      },
      { status: 500 },
    );
  }
}
