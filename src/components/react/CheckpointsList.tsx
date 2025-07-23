import { Checkpoint } from "../../types/Checkpoint";
import { S_Checkpoint } from "../styled/checkpoint";
import { S_CheckpointsList } from "../styled/checkpointsList";

export default function Checkpoints({ checkpoints }: { checkpoints: Checkpoint[]}) {
    return (
        <S_CheckpointsList>
            {checkpoints.map(checkpoint => (
                <S_Checkpoint key={checkpoint.id}>
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