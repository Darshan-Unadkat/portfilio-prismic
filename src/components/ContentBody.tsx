import { SliceZone } from "@prismicio/react";

import { components } from "@/slices";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { Content, DateField, isFilled } from "@prismicio/client";

export default function ContentBody({page} : {
    page: Content.BlogPostDocument | Content.ProjectDocument
}) {
  function formatDate(date: DateField) {
    if (isFilled.date(date)) {
      const dateOptions: Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };

      return new Intl.DateTimeFormat("en-US", dateOptions).format(
        new Date(date)
      );
    }
  }

  return (
    <Bounded as="article">
      <div className="rounded-2xl bottom-2 border-slate-100 bg-slate-900 px-4 py-10 md:px-8 ">
        <Heading as="h1">{page.data.title}</Heading>
        <div className="flex gap-4 text-yellow-500">
          {page.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <p className="mt-8 border-b border-slate-500 text-xl font-medium text-slate-300">
          {formatDate(page.data.date)}
        </p>
        <div className="prose prose-lg prose-invert mt-12 w-full max-w-none md:mt-20 ">
          <SliceZone slices={page.data.slices} components={components} />
        </div>
      </div>
    </Bounded>
  );
}
