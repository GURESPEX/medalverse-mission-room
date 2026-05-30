import { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/src/lib/utils";
import { CheckIcon } from "@/src/components/ui/mdv/icons/mdv-icons";

export type MdvStepStatus = "completed" | "active" | "pending";

export interface MdvStep {
  id: string;
  label: string;
  status: MdvStepStatus;
}

/* ── Root ────────────────────────────────────────────── */

interface MdvStepperRootProps extends HTMLAttributes<HTMLDivElement> {
  steps: MdvStep[];
}

function MdvStepperRoot({ steps, className, ...props }: MdvStepperRootProps) {
  return (
    <div className={cn("flex items-center w-full", className)} {...props}>
      {steps.map((step, index) => (
        <MdvStepperStepItem
          key={step.id}
          step={step}
          index={index}
          isLast={index === steps.length - 1}
        />
      ))}
    </div>
  );
}

/* ── Step Item (internal) ────────────────────────────── */

interface MdvStepperStepItemProps {
  step: MdvStep;
  index: number;
  isLast: boolean;
}

function MdvStepperStepItem({ step, index, isLast }: MdvStepperStepItemProps) {
  const { status, label } = step;

  const circleStyles: Record<MdvStepStatus, string> = {
    completed: "bg-mdv-primary-600 border-mdv-primary-600 text-white",
    active: "bg-white border-mdv-primary-600 text-mdv-primary-600",
    pending: "bg-white border-mdv-neutral-300 text-mdv-neutral-400",
  };

  const labelStyles: Record<MdvStepStatus, string> = {
    completed: "text-mdv-primary-600 font-semibold",
    active: "text-mdv-primary-700 font-semibold",
    pending: "text-mdv-neutral-400",
  };

  const connectorStyles: Record<MdvStepStatus, string> = {
    completed: "bg-mdv-primary-600",
    active: "bg-mdv-neutral-200",
    pending: "bg-mdv-neutral-200",
  };

  return (
    <div className="flex items-center flex-1 last:flex-initial">
      {/* Step circle + label */}
      <div className="flex flex-col items-center gap-1.5">
        <div
          className={cn(
            "h-8 w-8 rounded-full border-2 flex items-center justify-center text-xs font-bold transition-colors",
            circleStyles[status]
          )}
        >
          {status === "completed" ? (
            <CheckIcon size={14} />
          ) : (
            <span>{index + 1}</span>
          )}
        </div>
        <span className={cn("text-[11px] text-center leading-tight whitespace-nowrap", labelStyles[status])}>
          {label}
        </span>
      </div>

      {/* Connector line */}
      {!isLast && (
        <div className="flex-1 mx-2 mb-4">
          <div
            className={cn(
              "h-0.5 w-full transition-colors",
              step.status === "completed" ? connectorStyles.completed : connectorStyles.pending
            )}
          />
        </div>
      )}
    </div>
  );
}

/* ── Step Content wrapper ────────────────────────────── */

interface MdvStepperContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

function MdvStepperContent({ children, className, ...props }: MdvStepperContentProps) {
  return (
    <div className={cn("mt-6", className)} {...props}>
      {children}
    </div>
  );
}

/* ── Compound Export ─────────────────────────────────── */

export const MdvStepper = Object.assign(MdvStepperRoot, {
  Content: MdvStepperContent,
});
