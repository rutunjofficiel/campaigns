import { NextResponse } from "next/server";
import axios from "axios";
import {
  insertNewWhatsappSender,
  searchCollection,
} from "../../utils/database";
import useUserDetailsStore from "../../utils/stores";

var convert = require("xml-js");
export async function POST(req) {
  const { CustId, setUserDetails } = useUserDetailsStore();

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
  // const CustId = data.CustId;
  setUserDetails({ CustId: data.CustId });

  console.log("CustId:", CustId);
  const MobileNo = data.MobileNo;
  try {
    // const response = await axios.get(
    //   `${process.env.SIGNIN_API_URL}?CustId=${CustId}&MobileNo=${MobileNo}`,
    // );

    // const xmlResponse = response.data;
    // const result = convert.xml2json(xmlResponse, { compact: true, spaces: 4 });
    // jsonResult = JSON.parse(result);
    // jsonResult = JSON.parse(jsonResult.string._text);

    // console.log("jsonResult", jsonResult);
    const response = searchCollection(CustId);

    console.log("response:", response);
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
