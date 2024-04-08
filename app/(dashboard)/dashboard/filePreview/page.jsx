"use client";

import SectionHeader from "@/components/(dashboard)/sectionHeader";
import { DataTable } from "../dataTable";

import { columnsSMSAutomation } from "../columns";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import moment from "moment";
import { useEffect, useState } from "react";
const Page = () => {
  const [file, setFile] = useState(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedFile = localStorage?.getItem("xls");
      if (storedFile) {
        const parsedFile = JSON.parse(storedFile);
        parsedFile[0].date = moment(parsedFile[0].date).format("MM/DD/YYYY");
        setFile(parsedFile);
      }
    }
  }, []);
  // if (typeof window !== "undefined") {
  //   let file = JSON.parse(localStorage?.getItem("xls"));

  // file[0].date = moment(file[0].date).format("MM/DD/YYYY");
  // }
  // console.log(file.date);

  return (
    <div className="tableSectionWrapper">
      <div className=" ">
        <SectionHeader hideButtons={true} section="File Preview" />
        <div className="mx-auto mt-2 flex w-[90%] flex-row gap-4 ">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a campaign" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Campaign</SelectLabel>
                {campaignsOptions.map((option, index) => (
                  <SelectItem key={index} value={option.value}>
                    {option.text}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a template" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Template</SelectLabel>
                {templatesOptions.map((option, index) => (
                  <SelectItem key={index} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      {file && <DataTable data={file} columns={columnsSMSAutomation} />}
    </div>
  );
};

export default Page;

const campaignsOptions = [
  {
    value: "apple",
    text: "Apple",
  },
  {
    value: "banana",
    text: "Banana",
  },
  {
    value: "orange",
    text: "Orange",
  },
];

const templatesOptions = ["Diwali", "Holi", "Christmas"];
