import AppWrapper from "../_components/AppWrapper";
import LoadMore from "@/components/ui/LoadMore";

export default function page() {
  return (
    <AppWrapper>
      <div className="p-4">
        <h1 className="text-md font-semibold"> Latest crypto news </h1>

        <div className="flex mt-4">
          <LoadMore />
        </div>
      </div>
    </AppWrapper>
  );
}
