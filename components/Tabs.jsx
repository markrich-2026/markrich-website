import React from "react";
import * as Tabs from "@radix-ui/react-tabs";

const TabsComponent = () => (
  <Tabs.Root
    className="flex flex-col w-[300px] shadow-[0_2px_10px] shadow-blackA4"
    defaultValue="tab1"
  >
    <Tabs.List className="flex gap-3" aria-label="Manage your account">
      <Tabs.Trigger
        className="flex items-center justify-center select-none  hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black outline-none cursor-pointer"
        value="tab1"
      >
        Account
      </Tabs.Trigger>
      <Tabs.Trigger
        className="flex items-center justify-center select-none  hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black outline-none cursor-pointer"
        value="tab2"
      >
        Account 2
      </Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content
      className="grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
      value="tab1"
    >
      <h2>option 1</h2>
    </Tabs.Content>
    <Tabs.Content
      className="grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
      value="tab2"
    >
      <h2>Option 2</h2>
    </Tabs.Content>
  </Tabs.Root>
);

export default TabsComponent;
