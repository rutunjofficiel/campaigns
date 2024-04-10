"use client";
// import { ContentMasterTemplateForm } from "@/app/utils/formSchemas";
// import { Editor } from "react-draft-wysiwyg";

// import { EditorState, convertToRaw } from "draft-js";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import SectionHeader from "@/components/(dashboard)/sectionHeader";
// import { Tabs, TabsContent, TabsTrigger, TabsList } from "@/components/ui/tabs";
// import { Field, Form, Formik } from "formik";
// import { Button } from "@/components/ui/button";
// import { useEffect, useState } from "react";

export default function Page() {
  // const [editorState, setEditorState] = useState(EditorState.createEmpty());
  // const [templateBody, setTemplateBody] = useState("");
  // useEffect(() => {
  //   console.log("editorState", editorState.getCurrentContent().getPlainText());
  //   setTemplateBody(editorState.getCurrentContent().getPlainText());
  // }, [editorState]);

  return (
    <h1>content master</h1>
    // <div className="tableSectionWrapper">
    //   <SectionHeader
    //     toolbar={{
    //       options: [
    //         "inline",
    //         "blockType",
    //         "fontSize",
    //         "list",
    //         "textAlign",
    //         "history",
    //       ],
    //       inline: { inDropdown: true },
    //       list: { inDropdown: true },
    //       textAlign: { inDropdown: true },
    //       link: { inDropdown: true },
    //       history: { inDropdown: true },
    //     }}
    //     hideButtons={true}
    //     filterButtons={true}
    //     section="Content Master"
    //   />
    //   <Tabs defaultValue="sms">
    //     <div className="ml-[68px] w-[90%]">
    //       <TabsList>
    //         <TabsTrigger value="sms">SMS</TabsTrigger>
    //         <TabsTrigger value="whatsapp">Whatsapp</TabsTrigger>
    //         <TabsTrigger value="email">Email</TabsTrigger>
    //       </TabsList>
    //     </div>
    //     <TabsContent value="sms">
    //       <Formik
    //         validationSchema={ContentMasterTemplateForm}
    //         initialValues={{ templateName: "", templateBody: "" }}
    //         onSubmit={(values) => {
    //           setTemplateBody(editorState.getCurrentContent().getPlainText());
    //           console.log(values);
    //         }}
    //       >
    //         <Form>
    //           <label>Template Name</label>
    //           <Field name="templateName" type="text" />
    //           <Field name="templateBody" type="text" className="hidden" />
    //           <label>Template Body</label>
    //           {/* <Field name="templateBody">
    //             <Editor
    //               toolbarHidden
    //               id="templateBody"
    //               editorState={editorState}
    //               onEditorStateChange={setEditorState}
    //               wrapperClassName="editor-wrapper"
    //               editorClassName="editor-content"
    //               toolbarClassName="toolbar-class"
    //             />
    //           </Field> */}
    //           <Button type="submit">Save</Button>
    //         </Form>
    //       </Formik>
    //     </TabsContent>
    //     <TabsContent value="email"></TabsContent>
    //   </Tabs>
    // </div>
  );
}
