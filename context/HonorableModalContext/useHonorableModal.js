import { useContext } from "react";
import { HonorableModalContext } from "./HonorableModalProvider";

export default function useHonorableModal() {
    const honorableValues = useContext(HonorableModalContext);
    return honorableValues;
}