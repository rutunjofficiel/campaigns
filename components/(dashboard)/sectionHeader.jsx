"use client";
import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import { Download } from "lucide-react";
import { ListFilter } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "../../components/ui/toggle-group";
import { List } from "lucide-react";
import { smsXlsFormat } from "../../xlsFormats";
import { UploadAttachmentDialog } from "../../app/utils/formSchemas";
import { LayoutGrid } from "lucide-react";
import {
  DialogTrigger,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogHeader,
  DialogClose,
} from "../../components/ui/dialog";
import { Input } from "../ui/input";
import { Form, Formik } from "formik";
import { MdAttachment } from "react-icons/md";
import { CSVLink } from "react-csv";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import * as XLSX from "xlsx";

export default function SectionHeader({ section, hideButtons }) {
  const [fileName, setFileName] = useState("No file chosen");
  const [file, setFile] = useState(null);
  const [data, setData] = useState([]);

  const router = useRouter();

  const handleSubmit = () => {
    if (file) {
      const reader = new FileReader();
      const rABS = !!reader.readAsBinaryString;

      reader.onload = (e) => {
        /* Parse data */
        const bstr = e.target.result;
        const wb = XLSX.read(bstr, {
          type: rABS ? "binary" : "array",
          bookVBA: true,
        });
        /* Get first worksheet */
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        /* Convert array of arrays */
        const data = XLSX.utils.sheet_to_json(ws);
        /* Update state */
        setData(data);
      };

      if (rABS) {
        reader.readAsBinaryString(file);
      } else {
        reader.readAsArrayBuffer(file);
      }
    }
  };

  useEffect(() => {
    if (file) {
      handleSubmit();
    }
  }, [file]);

  const handleUpload = () => {
    if (data.length < 1) {
      console.log("Error, Empty File");
    } else {
      localStorage.setItem("xls", JSON.stringify(data));

      router.push("/dashboard/filePreview");
    }
  };

  return (
    <div className="mx-auto flex w-[90%] flex-row items-center justify-between">
      <h1 className="dashboard">{section}</h1>
      {hideButtons ? (
        <> </>
      ) : (
        <div className="flex flex-row items-center gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button
                size="xs"
                className="flex flex-row items-center rounded-full"
              >
                Upload
                <Plus className="ml-1  h-4 w-4" />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Upload Attachment</DialogTitle>
              </DialogHeader>
              <Formik
                // validationSchema={UploadAttachmentDialog}
                initialValues={{ attachment: "" }}
                onSubmit={handleUpload}
              >
                {({
                  values,
                  handleChange,
                  handleBlur,
                  setFieldValue,
                  errors,
                  handleSubmit,
                  touched,
                  isSubmitting,
                  setSubmitting,
                }) => (
                  <Form
                    onSubmit={handleSubmit}
                    className="flex flex-col justify-between gap-2"
                  >
                    <label
                      htmlFor="attachment"
                      className="flex w-full cursor-pointer flex-col justify-between rounded-lg bg-[#e9e9e9] p-3 text-sm"
                    >
                      <div className="flex flex-row items-center justify-between">
                        Choose Excel File (Max File Size: 1MB)
                        <MdAttachment
                          size={24}
                          className="my-auto rotate-90 opacity-80"
                        />
                      </div>
                      <div>
                        <span id="block file-name">{fileName}</span>
                      </div>
                    </label>

                    <input
                      type="file"
                      accept=".xlsx,.csv,.xls"
                      className="hidden"
                      id="attachment"
                      placeholder="Choose Excel File (Max File Size: 1MB)"
                      onChange={(event) => {
                        setFileName(
                          event.target.files[0]
                            ? event.target.files[0].name
                            : "No file chosen",
                        );
                        setFile(event.target.files[0]);
                        setFieldValue("file", event.target.files[0]);
                      }}
                    />
                    <DialogFooter>
                      <div className="flex w-full flex-row justify-between">
                        <Button
                          variant="outline"
                          className="rounded-md"
                          type="button"
                        >
                          <CSVLink data={smsXlsFormat}>
                            Download XLS Format
                          </CSVLink>
                        </Button>

                        <Button className="rounded-md" type="submit">
                          Upload
                        </Button>
                      </div>
                    </DialogFooter>
                  </Form>
                )}
              </Formik>
            </DialogContent>
          </Dialog>
          <Button variant="outline" size="iconsm">
            <Download className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="iconsm">
            <List className="h-4 w-4" />
          </Button>
          <ToggleGroup
            size="sm"
            className="h-fit gap-0 rounded-md bg-[#fff]"
            type="single"
          >
            <ToggleGroupItem value="list-view">
              <List className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="grid-view">
              <LayoutGrid className="h-4 w-4" />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      )}
    </div>
  );
}
