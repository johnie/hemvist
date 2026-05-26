import {
  createFormHook,
  createFormHookContexts,
  useStore,
} from "@tanstack/react-form";
import {
  type ComponentProps,
  cloneElement,
  createContext,
  type HTMLAttributes,
  type ReactElement,
  useContext,
  useId,
} from "react";

import { cn } from "@/lib/utils";

const { fieldContext, formContext, useFieldContext } = createFormHookContexts();

interface FormItemContextValue {
  id: string;
}

const FormItemContext = createContext<FormItemContextValue | null>(null);

function useFormField() {
  const field = useFieldContext<unknown>();
  const itemCtx = useContext(FormItemContext);
  if (!itemCtx) {
    throw new Error("FormItem context missing — wrap with <field.FormItem>");
  }
  const errors = useStore(field.store, (s) => s.meta.errors);
  const error = errors[0] ?? null;
  return {
    id: itemCtx.id,
    name: field.name,
    formItemId: `${itemCtx.id}-form-item`,
    formDescriptionId: `${itemCtx.id}-form-item-description`,
    formMessageId: `${itemCtx.id}-form-item-message`,
    error,
  };
}

function FormItem({ className, ...props }: ComponentProps<"div">) {
  const id = useId();
  return (
    <FormItemContext.Provider value={{ id }}>
      <div
        className={cn("grid gap-2", className)}
        data-slot="form-item"
        {...props}
      />
    </FormItemContext.Provider>
  );
}

function FormLabel({ className, children, ...props }: ComponentProps<"label">) {
  const { error, formItemId } = useFormField();
  return (
    <label
      className={cn(
        "select-none font-medium text-xs leading-none",
        error && "text-destructive",
        className
      )}
      data-error={Boolean(error)}
      data-slot="form-label"
      htmlFor={formItemId}
      {...props}
    >
      {children}
    </label>
  );
}

function FormControl({ children }: { children: ReactElement }) {
  const { error, formItemId, formDescriptionId, formMessageId } =
    useFormField();
  const injected: Record<string, unknown> = {
    "aria-describedby": error
      ? `${formDescriptionId} ${formMessageId}`
      : formDescriptionId,
    "aria-invalid": Boolean(error),
    "data-slot": "form-control",
    id: formItemId,
  };
  return cloneElement(children, injected as HTMLAttributes<HTMLElement>);
}

function FormDescription({ className, ...props }: ComponentProps<"p">) {
  const { formDescriptionId } = useFormField();
  return (
    <p
      className={cn("text-[11px] text-muted-foreground/80", className)}
      data-slot="form-description"
      id={formDescriptionId}
      {...props}
    />
  );
}

function FormMessage({ className, children, ...props }: ComponentProps<"p">) {
  const { error, formMessageId } = useFormField();
  if (!(error || children)) {
    return null;
  }
  const body =
    children ??
    (typeof error === "string"
      ? error
      : ((error as { message?: string } | null)?.message ?? null));
  if (!body) {
    return null;
  }
  return (
    <p
      className={cn("text-[11px] text-destructive", className)}
      data-slot="form-message"
      id={formMessageId}
      {...props}
    >
      {body}
    </p>
  );
}

const { useAppForm, withForm } = createFormHook({
  fieldComponents: {
    FormItem,
    FormLabel,
    FormControl,
    FormDescription,
    FormMessage,
  },
  formComponents: {},
  fieldContext,
  formContext,
});

export { useAppForm, withForm };
