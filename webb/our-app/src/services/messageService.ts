import prisma from '../lib/prismaClient';

export async function createMessage(content: string, senderName: string, roomId: string) {
  return prisma.message.create({
    data: {
      content,
      senderName,
      roomId,
    },
  });
}

export async function getMessagesByRoom(roomId: string, limit = 50) {
  return prisma.message.findMany({
    where: {
      roomId,
    },
    orderBy: {
      createdAt: 'asc',
    },
    take: limit,
  });
}

export async function getLatestMessages(limit = 10) {
  return prisma.message.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    take: limit,
  });
}

export async function deleteMessage(id: string) {
  return prisma.message.delete({
    where: {
      id,
    },
  });
}