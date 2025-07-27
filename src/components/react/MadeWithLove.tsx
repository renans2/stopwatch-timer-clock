import { Heart } from "lucide-react";
import { S_MadeWithLove } from "../styled/madeWithLove";

export default function MadeWithLove() {
    return (
        <S_MadeWithLove>
            Made with <Heart fill="red" /> by <a href="https://github.com/renans2" target="_blank" rel="noopener noreferrer">renanS2</a>
        </S_MadeWithLove>
    );
}