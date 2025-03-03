import prisma from '../lib/prismaClient';

export async function createRoom(name: string) {
  return prisma.room.create({
    data: {
      name,
    },
  });
}

export async function getAllRooms() {
  return prisma.room.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
}

export async function getRoomById(id: string) {
  return prisma.room.findUnique({
    where: {
      id,
    },
  });
}