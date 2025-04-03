import { Pause, Play } from "lucide-react";
import { useAppContextHook } from "../context/AppContext";

export default function ToggleButton({ toggleFunction }: { toggleFunction: () => void }) {
    const { token } = useAppContextHook();
    
    return (
        <button onClick={toggleFunction}>
            {
                token === undefined
                ? <Play />
                : <Pause />
            }
        </button>
    );
}