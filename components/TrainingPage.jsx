// Shared building blocks for the training landing pages (AI Training, Data Analytics, ...)

// Bulleted "Label: description" list
export const LabelList = ({ items }) => (
  <ul className="flex flex-col gap-3">
    {items.map(([label, text], index) => (
      <li key={index} className="flex gap-3 text-[#18181B]">
        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#F58A07]" />
        <p>
          <span className="font-semibold">{label}:</span> {text}
        </p>
      </li>
    ))}
  </ul>
);

export const SectionHeading = ({ children, eyebrow, center }) => (
  <div className={`flex flex-col gap-3 ${center ? "items-center text-center" : ""}`}>
    {eyebrow && (
      <p className="text-[#ED3630] font-medium md:text-sm">{eyebrow}</p>
    )}
    <h2 className="text-4xl font-semibold tracking-tighter md:text-3xl">
      {children}
    </h2>
  </div>
);
