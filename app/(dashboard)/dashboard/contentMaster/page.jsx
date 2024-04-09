"use client";
import { ContentMasterTemplateForm } from "@/app/utils/formSchemas";
import SectionHeader from "@/components/(dashboard)/sectionHeader";
import { Tabs, TabsContent, TabsTrigger, TabsList } from "@/components/ui/tabs";
import { Field, Form, Formik } from "formik";

export default function Page() {
  return (
    <div className="tableSectionWrapper">
      <SectionHeader
        hideButtons={true}
        filterButtons={true}
        section="Content Master"
      />
      <Tabs defaultValue="sms">
        <div className="ml-[68px]  w-[90%] ">
          <TabsList>
            <TabsTrigger value="sms">SMS</TabsTrigger>
            <TabsTrigger value="whatsapp">Whatsapp</TabsTrigger>
            <TabsTrigger value="email">Email</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="sms">
          <Formik
            validationSchema={ContentMasterTemplateForm}
            initialValues={{ templateName: "", templateBody: "" }}
            onSubmit={() => {
              console.log(values);
            }}
          >
            <Form>
              <label>Template Name</label>
              <Field type="text" placeholder="Type here" />

              <label>Template Body</label>
              <Field type="text" placeholder="Type here" />
            </Form>
          </Formik>
        </TabsContent>
      </Tabs>
    </div>
  );
}
