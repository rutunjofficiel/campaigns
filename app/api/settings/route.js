import { NextResponse, NextRequest } from "next/server";

import { insertNewWhatsappSender } from "../../utils/database";
import { useUserDetailsStore } from "@/app/utils/stores";

const { CustId, setUserDetails } = useUserDetailsStore();

export async function GET() {
  let d = JSON.parse(localStorage.getItem("userInfo"));
  if (d) {
    if (d["custId"]) {
      let custId = d["custId"];
    } else {
      setLoading(false);
    }
  } else {
    setLoading(false);
  }

  console.log("Settings for", CustId);
}

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

  if (data.flag == "whatsappSettings") {
    console.log("VALUES HERE:", data.flag);
    insertNewWhatsappSender(CustId, data.values);
    return NextResponse.json(
      { successMessage: "New whatsapp settings added" },
      { status: 200 },
    );
  }
}
