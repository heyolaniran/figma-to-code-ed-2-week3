import { ArticleProps } from "@/types";
import { formater } from "@/utils/date-fns";
import { Heart, MessageSquareText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MotionDiv } from "./MotionDiv";

export function Article({ item }: { item: ArticleProps }) {
  return (
    <MotionDiv className="border rounded-lg p-2">
      <div className="flex items-enter gap-2 mb-2">
        <Image src={"/coinmarketcap.svg"} width={36} height={36} alt="c" />
        <div className="block space-y-1">
          <h2 className="text-sm text-slate-400">{item.author}</h2>
          <span className="flex items-center text-xs">
            {" "}
            News - {formater(item.publishedAt)}{" "}
          </span>
        </div>
      </div>

      {item.urlToImage ? (
        <Image
          src={item.urlToImage}
          width={400}
          height={400}
          className="rounded-lg"
          alt="i"
        />
      ) : (
        <div className=" animate-pulse w-full h-56 bg-slate-400/45 rounded-lg"></div>
      )}

      <div className="mt-2">
        <Link className="text-md font-medium italic" href={item.url}>
          {" "}
          {item.title}
        </Link>
        <div className="text-slate-500 line-clamp-3">{item.description}</div>
      </div>

      <div className="mt-2 bottom-0 flex items-center justify-start gap-2">
        <span className="flex items-center gap-1">
          {" "}
          <Heart className="w-4 h-4" /> 5{" "}
        </span>
        <span className="flex items-center gap-1">
          {" "}
          <MessageSquareText className="w-4 h-4" /> 5{" "}
        </span>
      </div>
    </MotionDiv>
  );
}
