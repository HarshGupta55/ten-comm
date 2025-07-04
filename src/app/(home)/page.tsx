import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";

export default function Page() {
  return (
    <div className="p-4">
      <div className="flex flex-col gap-y-4">
        <div>
          <Button variant="elevated">Button</Button>
        </div>
        <div>
          <Input placeholder="I am a input" />
        </div>
        <div>
          <Progress value={50} />
        </div>
        <div>
          <textarea placeholder="I am a text area" />
        </div>
        <div>
          <Checkbox />
        </div>
     </div>
    </div>
    
  );
}
