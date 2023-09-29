//import { PrismaClient } from "@prisma/client";
import { PrismaClient } from '../prisma/generated/client'
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export const PUT = async (
  request: NextRequest,
  response: NextResponse
) => {
  const url = new URL(request.url);
  const intentId = url.searchParams.get("intentId");

  try {
    await prisma.order.update({
      where: {
        intent_id: intentId as string,
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
    );
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