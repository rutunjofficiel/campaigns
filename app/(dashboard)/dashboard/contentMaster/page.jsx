"use client";
import { ContentMasterTemplateForm } from "@/app/utils/formSchemas";
import { Editor } from "react-draft-wysiwyg";
import { useStore } from "../settings/whatsappSettings/page";
import { EditorState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import SectionHeader from "@/components/(dashboard)/sectionHeader";
import { Tabs, TabsContent, TabsTrigger, TabsList } from "@/components/ui/tabs";
import { Field, Form, Formik, useField, useFormikContext } from "formik";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { PlusIcon } from "lucide-react";
import useWhatsappSettingsStore from "../../../utils/stores";
export default function Page() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const { whatsappNumber } = useWhatsappSettingsStore();

  return (
    <div className="tableSectionWrapper">
      <SectionHeader
        hideButtons={true}
        filterButtons={true}
        section="Content Master"
      />
      <Tabs defaultValue="sms">
        <div className="mx-[68px] w-[90%]">
          <TabsList>
            <TabsTrigger value="sms">SMS</TabsTrigger>
            <TabsTrigger value="whatsapp">Whatsapp</TabsTrigger>
            <TabsTrigger value="email">Email</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="sms">
          <div className="mx-[68px]  flex flex-row gap-4">
            <Formik
              validationSchema={ContentMasterTemplateForm}
              initialValues={{ templateName: "", templateBody: "" }}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              {(props) => (
                <Form className="mx-auto flex w-[90%] flex-col gap-2">
                  <div className="flex flex-col gap-2 rounded-md border border-gray-200 bg-white p-2 ">
                    <label className="opacity-80">Template Name</label>
                    <Field
                      className=" bg-white "
                      name="templateName"
                      type="text"
                      placeholder="Type here"
                    />
                  </div>
                  <div className="flex flex-col gap-2 rounded-md border border-gray-200 bg-white p-2 ">
                    <label className="opacity-80">Template Body</label>
                    <div className="h-[40vh] w-full  bg-white ">
                      <RichTextEditor name="templateBody" className="" />
                    </div>
                  </div>
                  <Button className="w-fit rounded-lg" type="submit">
                    Save
                  </Button>
                </Form>
              )}
            </Formik>
            <div className="flex h-full w-fit flex-col gap-2 rounded-lg bg-campaignBlue px-4 py-2">
              <Button className="rounded-lg bg-campaignBlueDark opacity-90">
                Greeting Keywords <PlusIcon />
              </Button>
              <Button className="rounded-lg bg-campaignBlueDark opacity-90">
                Greeting Keywords <PlusIcon />
              </Button>
              <Button className="rounded-lg bg-campaignBlueDark opacity-90">
                Greeting Keywords <PlusIcon />
              </Button>
              <Button className="rounded-lg bg-campaignBlueDark opacity-90">
                Greeting Keywords <PlusIcon />
              </Button>
              <Button className="rounded-lg bg-campaignBlueDark opacity-90">
                Greeting Keywords <PlusIcon />
              </Button>
              <Button className="rounded-lg bg-campaignBlueDark opacity-90">
                Greeting Keywords <PlusIcon />
              </Button>
              <Button className="rounded-lg bg-campaignBlueDark opacity-90">
                Greeting Keywords <PlusIcon />
              </Button>
              <Button className="rounded-lg bg-campaignBlueDark opacity-90">
                Greeting Keywords <PlusIcon />
              </Button>
              <Button className="rounded-lg bg-campaignBlueDark opacity-90">
                Greeting Keywords <PlusIcon />
              </Button>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="email">
          <div className="mx-[68px]  flex flex-row gap-4">
            <Formik
              validationSchema={ContentMasterTemplateForm}
              initialValues={{ templateName: "", templateBody: "" }}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              {(props) => (
                <Form className="mx-auto flex w-[90%] flex-col gap-2">
                  <div className="flex flex-col gap-2 rounded-md border border-gray-200 bg-white p-2 ">
                    <label className="opacity-80">Template Name</label>
                    <Field
                      className=" bg-white "
                      name="templateName"
                      type="text"
                      placeholder="Type here"
                    />
                  </div>
                  <div className="flex flex-col gap-2 rounded-md border border-gray-200 bg-white p-2 ">
                    <label className="opacity-80">Template Body</label>
                    <div className="h-[40vh] w-full  bg-white ">
                      <RichTextEditor name="templateBody" className="" />
                    </div>
                  </div>
                  <Button className="w-fit rounded-lg" type="submit">
                    Save
                  </Button>
                </Form>
              )}
            </Formik>
            <div className="flex h-full w-fit flex-col gap-2 rounded-lg bg-campaignBlue px-4 py-2">
              <Button className="rounded-lg bg-campaignBlueDark opacity-90">
                Greeting Keywords <PlusIcon />
              </Button>
              <Button className="rounded-lg bg-campaignBlueDark opacity-90">
                Greeting Keywords <PlusIcon />
              </Button>
              <Button className="rounded-lg bg-campaignBlueDark opacity-90">
                Greeting Keywords <PlusIcon />
              </Button>
              <Button className="rounded-lg bg-campaignBlueDark opacity-90">
                Greeting Keywords <PlusIcon />
              </Button>
              <Button className="rounded-lg bg-campaignBlueDark opacity-90">
                Greeting Keywords <PlusIcon />
              </Button>
              <Button className="rounded-lg bg-campaignBlueDark opacity-90">
                Greeting Keywords <PlusIcon />
              </Button>
              <Button className="rounded-lg bg-campaignBlueDark opacity-90">
                Greeting Keywords <PlusIcon />
              </Button>
              <Button className="rounded-lg bg-campaignBlueDark opacity-90">
                Greeting Keywords <PlusIcon />
              </Button>
              <Button className="rounded-lg bg-campaignBlueDark opacity-90">
                Greeting Keywords <PlusIcon />
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

function RichTextEditor() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const formik = useFormikContext();
  const handleEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
    const plainText = newEditorState.getCurrentContent().getPlainText();
    console.log("plainText", plainText);
    formik.setFieldValue("templateBody", plainText);
  };

  return (
    <Editor
      toolbarHidden
      name="templateBody"
      placeholder="Type here"
      editorState={editorState}
      onEditorStateChange={handleEditorStateChange}
      wrapperClassName="editor-wrapper"
      editorClassName="editor-content"
      toolbarClassName="toolbar-class"
    />
  );
}
