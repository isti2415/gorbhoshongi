import { BentoGridDemo } from "@/components/bento-demo";
import Nav from "@/components/nav";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";
import React from "react";

const Meditation = () => {
  return (
    <div className="min-h-screen pt-16 ">
      <Nav />
      <div className="container mt-8 flex flex-col items-center gap-8">
        <span className="font-bold text-xl">Meditation</span>
        <Tabs
          defaultValue="positive"
          className="w-xl flex flex-col items-center gap-4"
        >
          <TabsList>
            <TabsTrigger value="positive">Postive-Psychology</TabsTrigger>
            <TabsTrigger value="mindful">Mindfulness</TabsTrigger>
          </TabsList>
          <TabsContent value="positive">
            <BentoGridDemo />
          </TabsContent>
          <TabsContent value="mindful">
            <BentoGridDemo />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Meditation;
