import { ImageIcon } from "@/components/icons";

export default function AttachmentButton({
  label,
  onClick,
}: {
  label: string;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center gap-2 rounded-lg border border-hairline bg-white px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-neutral-50"
    >
      <ImageIcon className="h-4 w-4" />
      {label}
    </button>
  );
}
