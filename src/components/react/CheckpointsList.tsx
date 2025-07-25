import { Checkpoint } from "../../types/Checkpoint";
import { S_Checkpoint } from "../styled/checkpoint";
import { S_CheckpointsList } from "../styled/checkpointsList";

export default function CheckpointsList({ checkpoints }: { checkpoints: Checkpoint[]}) {
    return (
        <S_CheckpointsList>
            {checkpoints.map(checkpoint => (
                <S_Checkpoint
                    initial={{ y: -20, opacity: 0}}
                    animate={{ y: 0, opacity: 1}}
                    transition={{ duration: 0.3, ease:"easeInOut" }}
                    layout
                    key={checkpoint.id}
                >
                    <span>{checkpoint.id}.</span>
                    <span>
                        {checkpoint.hours.toString().padStart(2, "0")}
                        :
                        {checkpoint.minutes.toString().padStart(2, "0")}
                        :
                        {checkpoint.seconds.toString().padStart(2, "0")}
                    </span>
                </S_Checkpoint>
            ))}
        </S_CheckpointsList>
    );
}