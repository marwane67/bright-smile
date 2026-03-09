import { AlertTriangle } from "lucide-react";

interface DisclaimerProps {
  text: string;
  className?: string;
}

export default function Disclaimer({ text, className = "" }: DisclaimerProps) {
  return (
    <div
      className={`flex items-start gap-3 rounded-xl bg-amber-50 border border-amber-200 p-4 ${className}`}
    >
      <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-500" />
      <p className="text-sm text-amber-800 leading-relaxed">{text}</p>
    </div>
  );
}
