import { PrismaClient } from "@prisma/client";
import { NextApiResponse } from "next";

const prisma = new PrismaClient();

export const PUT = async (
  intentId: string,
  response: NextApiResponse
) => {
  try {
    await prisma.order.update({
      where: {
        intent_id: intentId,
      },
      data: { status: "Being prepared!" },
    });
    return response.status(200).json({ message: "Order has been updated" });
  } catch (err) {
    console.log(err);
    return response.status(500).json({ message: "Something went wrong!" });
  }
};
/* import { prisma } from "@/utils/connect"
import { NextResponse } from "next/server"

export const PUT = async ({ params }: { params: { intentId: string } }) => {
  const { intentId } = params;

  try {
    await prisma.order.update({
      where: {
        intent_id: intentId,
      },
      data: { status: "Being prepared!" },
    });
    return new NextResponse(
      JSON.stringify({ message: "Order has been updated" }),
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    )
  }
} */