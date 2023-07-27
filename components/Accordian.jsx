import React from "react";
import classNames from "classnames";
import * as Accordion from "@radix-ui/react-accordion";

const AccordionComponent = ({ data }) => (
  <Accordion.Root
    className="bg-mauve6 w-full mx-auto max-w-4xl"
    type="single"
    defaultValue="1"
    collapsible
  >
    {data.map((ele, ind) => (
      <AccordionItem value={ind + 1}>
        <AccordionTrigger>{ele.question}</AccordionTrigger>
        <AccordionContent>{ele.answer}</AccordionContent>
      </AccordionItem>
    ))}
  </Accordion.Root>
);

const AccordionItem = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Item
      className={classNames(
        "w-full   transition  mt-4 overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </Accordion.Item>
  )
);

const AccordionTrigger = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className="flex">
      <Accordion.Trigger
        className={classNames(
          " hover:bg-mauve2  transition group flex h-[45px] flex-1 font-semibold cursor-default items-center justify-between bg-white text-[15px] leading-none  outline-none",
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <div
          className="text-violet10 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180 cursor-pointer"
          aria-hidden
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      </Accordion.Trigger>
    </Accordion.Header>
  )
);

const AccordionContent = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
      className={classNames(
        "data-[state=open]:animate-slideDown border-slate-100 border-b-2 data-[state=closed]:animate-slideUp overflow-hidden text-sm font-light",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      <div className="py-[15px]">{children}</div>
    </Accordion.Content>
  )
);

export default AccordionComponent;
