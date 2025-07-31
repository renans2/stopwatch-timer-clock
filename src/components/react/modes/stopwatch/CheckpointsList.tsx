import { Checkpoint } from "../../../../types/Checkpoint";
import { S_Checkpoint } from "../../../styled/checkpoint";
import { S_CheckpointsList } from "../../../styled/checkpointsList";

export default function CheckpointsList({ checkpoints }: { checkpoints: Checkpoint[]}) {
    return (
        <S_CheckpointsList>
            {checkpoints.map(checkpoint => (
                <S_Checkpoint
                    initial={{ y: -20, opacity: 0}}
                    animate={{ y: 0, opacity: 1}}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    layout
                    key={checkpoint.id}
                >
                    <span>{checkpoint.id}.</span>
                    <span>
                        {checkpoint.hours !== 0 && (
                            <>{checkpoint.hours} hour{checkpoint.hours > 1 && <>s</>}, </>
                        )}

                        {checkpoint.minutes !== 0 && (
                            <>{checkpoint.minutes} min, </>
                        )}

                        <>{checkpoint.seconds} sec</>
                    </span>
                </S_Checkpoint>
            ))}
        </S_CheckpointsList>
    );
}