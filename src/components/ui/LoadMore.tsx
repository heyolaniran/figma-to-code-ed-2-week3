"use client";

import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { ArticleProps, JSXElement } from "@/types";
import { Loader2 } from "lucide-react";
import { Article } from "./Article";
import axios from "axios";

export default function LoadMore() {
  let page = 2;

  const [ref, inView] = useInView();

  const [data, setData] = useState<ArticleProps[]>([]);

  useEffect(() => {
    if (inView) {
      const ENDPOINT = process.env.NEXT_PUBLIC_NEWS_API + `&pageSize=24&page=${page}`;
      axios
        .get(ENDPOINT)
        .then((response) => setData([...data, ...response.data.articles]));
    }
  });

  return (
    <>
      <section className="items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {data.map((article, index) => (
            <Article item={article} key={index} />
          ))}
        </div>
        <div ref={ref} className="mt-4 flex justify-center items-center">
          <Loader2 className="animate-spin" />
        </div>
      </section>
    </>
  );
}
