import { Terminal } from "lucide-react"

import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"
import { useAlertStore } from "@/store/alert";

export function SuccessAlert() {
    const { message } = useAlertStore()
    return (
        <Alert className="w-full mb-4 border-green-500 bg-green-50 text-green-800">
            <Terminal className="h-8 w-4" />
            <AlertTitle>Success</AlertTitle>
            <AlertDescription>
                {message}
            </AlertDescription>
        </Alert>
    );
}


