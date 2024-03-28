import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import { Download } from "lucide-react";
import { ListFilter } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "../../components/ui/toggle-group";
import { List } from "lucide-react";
import { LayoutGrid } from "lucide-react";
import { ListFilterIcon } from "lucide-react";

export default function SectionHeader({ section }) {
  return (
    <div className="mx-auto flex w-[90%] flex-row items-center justify-between">
      <h1 className="dashboard">{section}</h1>
      <div className="flex flex-row items-center gap-2">
        <Button size="xs" className="flex flex-row items-center rounded-full">
          Upload
          <Plus className="ml-1  h-4 w-4" />
        </Button>
        <Button variant="outline" size="iconsm">
          <Download className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="iconsm">
          <List className="h-4 w-4" />
        </Button>
        <ToggleGroup
          size="sm"
          className="h-fit gap-0 rounded-md bg-[#fff]"
          type="single"
        >
          <ToggleGroupItem value="list-view">
            <List className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="grid-view">
            <LayoutGrid className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  );
}
