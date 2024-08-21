import { Image, PictureInPicture } from "lucide-react";


export default function ResumeTrendingSkeleton() {

    return (
        <div className="p-3 rounded-xl border  animate-pulse">
            <div className="flex justify-between items-center">
                <div className="flex justify-start items-center gap-2">
                    <div className="p-2 rounded-full border bg-gray-200 dark:bg-gray-600">
                     <Image className="w-8 h-8" />
                    </div>
                    <div className="block">
                        <div className="h-2.5 bg-gray-200 rounded-full text-center dark:bg-gray-700 w-12 mb-2 "></div>
                        <div className="h-2.5 bg-gray-200 rounded-full text-center dark:bg-gray-700 w-8  "></div>
                    </div>
                </div>
                <div className="h-2.5 bg-gray-200 rounded-full text-center dark:bg-gray-700 w-8 "></div>
            </div>
            <div className="mt-4">
            <div className="h-2.5 bg-gray-200 rounded-full text-center dark:bg-gray-700 w-10 mb-2 "></div>
            <div className="h-2 bg-gray-200 rounded-full text-center dark:bg-gray-700 w-20 "></div>
            </div>
        </div>
    )
}