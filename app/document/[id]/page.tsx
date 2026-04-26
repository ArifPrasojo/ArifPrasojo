import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import DocumentView from "@/components/DocumentView";

export default async function DocumentPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  
  const document = await prisma.document.findUnique({
    where: {
      id: id,
    },
    include: {
      summaries: {
        orderBy: { createdAt: "desc" }
      },
      messages: {
        orderBy: { createdAt: "asc" }
      }
    }
  });

  if (!document) {
    return notFound();
  }

  return <DocumentView document={document} />;
}
